using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    public partial class DataModelRollback : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Suggestions_Departments_DepartmentID",
                table: "Suggestions");

            migrationBuilder.DropForeignKey(
                name: "FK_Suggestions_Employees_EmployeeID",
                table: "Suggestions");

            migrationBuilder.AlterColumn<int>(
                name: "EmployeeID",
                table: "Suggestions",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "DepartmentID",
                table: "Suggestions",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Suggestions_Departments_DepartmentID",
                table: "Suggestions",
                column: "DepartmentID",
                principalTable: "Departments",
                principalColumn: "ID");

            migrationBuilder.AddForeignKey(
                name: "FK_Suggestions_Employees_EmployeeID",
                table: "Suggestions",
                column: "EmployeeID",
                principalTable: "Employees",
                principalColumn: "ID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Suggestions_Departments_DepartmentID",
                table: "Suggestions");

            migrationBuilder.DropForeignKey(
                name: "FK_Suggestions_Employees_EmployeeID",
                table: "Suggestions");

            migrationBuilder.AlterColumn<int>(
                name: "EmployeeID",
                table: "Suggestions",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "DepartmentID",
                table: "Suggestions",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Suggestions_Departments_DepartmentID",
                table: "Suggestions",
                column: "DepartmentID",
                principalTable: "Departments",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Suggestions_Employees_EmployeeID",
                table: "Suggestions",
                column: "EmployeeID",
                principalTable: "Employees",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
