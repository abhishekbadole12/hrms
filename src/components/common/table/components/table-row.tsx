import React from "react";


export interface ITableRowProps {
  data: (string | number | React.ReactNode)[];
}

export default function TableRow({ data }: ITableRowProps) {
  return (
    <tr className="hover:bg-gray-50 transition cursor-pointer">
      {data.map((item, i) => (
        <td key={i} className="p-4 text-sm font-semibold text-zinc-600 border-b border-zinc-100 whitespace-nowrap">{item}</td>
      ))}
    </tr>
  );
}
