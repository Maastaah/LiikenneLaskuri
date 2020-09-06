using System;
using System.ComponentModel.DataAnnotations;

namespace LiikenneLaskuriUI.Models
{
    public class LiikenneLaskuriData
    {
        [Key]
        public int Id { get; set; }
        public int Temp { get; set; }
        public int Speed { get; set; }
        public int Humidity { get; set; }
        public int Illuminance { get; set; }
        public string ObjectType { get; set; }
        [Required]
        public DateTime DateTime { get; set; }
    }
}
