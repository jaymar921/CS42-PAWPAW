import React from "react";
import Button from "../buttons/Button";

function TableView({
  TableHeader = [],
  TableRows = [],
  OnClickActions = [],
  className = "w-100 my-8",
}) {
  return (
    <div className={`${className}`}>
      <table className="w-full table-auto text-center">
        <thead>
          <tr>
            {TableHeader.map((headerColumn, index) => {
              return <th key={`${index}${Math.random()}`}>{headerColumn}</th>;
            })}
            {OnClickActions && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {TableRows.map((rowColumn, index) => {
            return (
              <tr key={index} className="odd:bg-gray-100 even:bg-white">
                {rowColumn.map((rowData, index) => {
                  return <td key={`${index}${Math.random()}`}>{rowData}</td>;
                })}
                {OnClickActions && (
                  <td>
                    <Button
                      icon="fa-solid fa-gear"
                      default
                      onClick={() => {
                        if (OnClickActions[index]) OnClickActions[index]();
                      }}
                    ></Button>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TableView;
