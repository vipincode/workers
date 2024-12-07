import React from "react";
import { useNavigate } from "react-router-dom";

interface TableRow {
  serviceId: number;
  rowData: (string | number)[];
}

interface TableProps {
  headers: string[];
  rows: TableRow[];
}
const Table: React.FC<TableProps> = ({ headers, rows }) => {
  const redirect = useNavigate();
  return (
    <div className="overflow-x-auto">
      <table className="table min-w-[1280px] lg:min-w-full">
        {/* Table Head */}
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        {/* Table Body */}
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.rowData.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
              <td>
                <button className="btn btn-xs btn-primary" onClick={() => redirect(`/add-reviews/${row.serviceId}`)}>
                  Add Reviews
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
