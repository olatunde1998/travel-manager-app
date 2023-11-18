import React, { FC } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";


export const TableMain = ({ data, columns = [], tableClass, filters }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    enableColumnResizing: true,
    debugTable: true,
    filters,
  });

  return (
    <div className="">
      <div className="w-full overflow-x-auto block rounded-[0.25rem] min-h-[30.3rem] bg-white  shadow-shadowOne border border-[#213f7d0f]">
        {/* Render table if table has data  */}
        <table
          className={"w-full h-full rounded-[0.25rem] " + " " + tableClass}
        >
          <thead className="text-xs border-b-[2px]  border-[#DDAA33]">
            {/* Mapping through the table headers */}
            {table?.getHeaderGroups()?.map((headerGroup, i) => (
              <tr key={i}>
                {headerGroup.headers.map((header, idx) => (
                  <th
                    key={idx}
                    className=" bg-[#FBF6EB] p-6  text-left font-bold capitalize text-sm"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {/* Mapping throught the table body */}
            {table.getRowModel().rows.map((row, index) => (
              <tr
                key={index}
                className="cursor-pointer border-x-none text-sm border-b-[1px] border-gray-100 hover:bg-[#FBF6EB]  bg-white hover:border-l-[2px] hover:border-[#DDAA33] hover:border-b-0  whitespace-nowrap"
                
              >
                {row.getVisibleCells().map((cell, key) => (
                  <td key={key} className="py-1">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
