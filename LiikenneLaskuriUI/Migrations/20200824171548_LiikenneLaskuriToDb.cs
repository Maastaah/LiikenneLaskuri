using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace LiikenneLaskuriUI.Migrations
{
    public partial class LiikenneLaskuriToDb : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "LiikenneLaskuriData",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Temp = table.Column<int>(nullable: false),
                    Speed = table.Column<int>(nullable: false),
                    Humidity = table.Column<int>(nullable: false),
                    Illuminance = table.Column<int>(nullable: false),
                    ObjectType = table.Column<string>(nullable: true),
                    DateTime = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LiikenneLaskuriData", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "LiikenneLaskuriData");
        }
    }
}
