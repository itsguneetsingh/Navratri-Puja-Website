import React from "react";

const Table = ({ headings, data }) => {
  return (
    <table className="border-collapse border-none w-full">
      <thead>
        <tr>
          {headings.map((heading, index) => (
            <th
              key={index}
              className="font-bold text-2xl border-y-[1px] border-y-black p-2"
            >
              {heading}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td
                key={cellIndex}
                className="text-center text-2xl border-y-[1px] border-y-black p-2"
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
