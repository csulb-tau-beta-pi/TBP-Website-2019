const eligiblesList = [
  {
    firstName: "Eric",
    lastName: "Aguilar",
    middleName: "Reyna"
  },
  {
    firstName: "Laith",
    lastName: "Al Maawali",
    middleName: ""
  }
];

import * as XLSX from "xlsx";
import excel from "xlsx";

let fileName = "../../../assets/docs/S19 Juniors.xlsx";
let workbook = excel.readFile(fileName);
console.log(workbook); //should print an array with the excel file data
