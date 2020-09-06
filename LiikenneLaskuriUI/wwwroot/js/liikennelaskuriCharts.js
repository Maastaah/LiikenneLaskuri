var ctx = document.getElementById('chart1').getContext('2d');
var ctx2 = document.getElementById('chart2').getContext('2d');
var temp = [];
var speed = [];
$(document).ready(function () {
    loadChart();   
});

function loadChart() {
    var objectTypeChart = generateBarChart();
    //var tempSpeedChart = generateLineChart();
    $.ajax({
        "url": "/liikennelaskuri/getall",
        "type": "get",
        "datatype": "json",
        "success": function (data) {
            $.each(data.data, function (index, obj) {
                temp.push(obj.temp);
                speed.push(obj.speed);
                if (obj.objectType === "Car") {
                    objectTypeChart.data.datasets[0].data[0]++;                 
                }
                if (obj.objectType === "Biker") {
                    objectTypeChart.data.datasets[0].data[1]++;
                }
                if (obj.objectType === "Walker") {
                    objectTypeChart.data.datasets[0].data[2]++;
                }
            });
            objectTypeChart.update();
            //tempSpeedChart.update();
        }
    });
}
function generateBarChart() {
    var objectTypeChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Car', 'Bike', 'Walker'],
            datasets: [{
                label: 'Object types',
                data: [0,0,0],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    return objectTypeChart;
}

function generateLineChart() {
    var labels = [];
    for (var i = 0; i < 76; i++) {
        labels.push(i);
    }
    var speedTempChart = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: [labels],
            datasets: [{
                label: 'Car Speed',
                data: speed,
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderWidth: 1
            }, {
            label: 'Temp',
                data: temp,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1
            }
   
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }],
                xAxes: [{
                    ticks: {
                        autoSkip: true,
                        maxTicksLimit: 10
                    }
                }]
            }
        }
    });
    console.log(speed);
    console.log(temp);
    return speedTempChart;
}


