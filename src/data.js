const exportUsersToExcel = require('./rest-api.js');

const users = [
    {
        id: 0,
        name: 'Peter',
        age: 31
    },
    {
        id: 1,
        name: 'John',
        age: 23
    }
];

const workSheetColumnName = [
    "ID",
    "Name",
    "Age"
]

const workSheetName = 'Users';
const filePath = './outputFiles/excel-from-js.xlsx';

exportUsersToExcel(users, workSheetColumnName, workSheetName, filePath);