"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.table = void 0;
const alignTableData_1 = require("./alignTableData");
const calculateCellWidths_1 = require("./calculateCellWidths");
const calculateRowHeights_1 = require("./calculateRowHeights");
const drawTable_1 = require("./drawTable");
const makeTableConfig_1 = require("./makeTableConfig");
const mapDataUsingRowHeights_1 = require("./mapDataUsingRowHeights");
const padTableData_1 = require("./padTableData");
const stringifyTableData_1 = require("./stringifyTableData");
const truncateTableData_1 = require("./truncateTableData");
const validateTableData_1 = require("./validateTableData");
const table = (data, userConfig = {}) => {
    validateTableData_1.validateTableData(data);
    let rows = stringifyTableData_1.stringifyTableData(data);
    const config = makeTableConfig_1.makeTableConfig(rows, userConfig);
    rows = truncateTableData_1.truncateTableData(rows, config);
    const rowHeights = calculateRowHeights_1.calculateRowHeights(rows, config);
    rows = mapDataUsingRowHeights_1.mapDataUsingRowHeights(rows, rowHeights, config);
    rows = alignTableData_1.alignTableData(rows, config);
    rows = padTableData_1.padTableData(rows, config);
    const cellWidths = calculateCellWidths_1.calculateCellWidths(rows[0]);
    return drawTable_1.drawTable(rows, cellWidths, rowHeights, config);
};
exports.table = table;
