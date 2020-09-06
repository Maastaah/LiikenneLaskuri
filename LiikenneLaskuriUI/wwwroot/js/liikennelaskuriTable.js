var dataTable;

$(document).ready(function () {
    loadDataTable();
});

function loadDataTable() {
    dataTable = $("#DT_load").DataTable({
        "ajax": {
            "url": "/liikennelaskuri/getall",
            "type": "GET",
            "datatype": "json"
        },
        "columns": [
            { "data": "objectType", "width": "20%" },
            { "data": "speed", "width": "20%" },
            { "data": "temp", "width": "20%" },
            { "data": "humidity", "width": "20%" },
            { "data": "illuminance", "width": "20%" },
            { "data": "dateTime", "width": "20%" },          
        ],
        "language": {
            "emptyTable": "no data found"
        },
        "width": "100%"
    });
}
