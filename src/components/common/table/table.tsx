import React from "react";
//
import TableHeadItem from "./components/table-head-item";
import TableRow from "./components/table-row";
//

interface ITableProps {
  theadData: string[];
  tbodyData: {
    id: string | number;
    data: (string | number | React.ReactNode)[];
  }[];
}

export default function Table({ theadData, tbodyData }: ITableProps) {
  return (
    <table className="w-full">
      <thead className="bg-blue-100">
        <tr className="rounded-lg">
          {theadData.map((h, i) => (
            <TableHeadItem key={i} item={h} />
          ))}
        </tr>
      </thead>

      <tbody>
        {tbodyData.map((item, index) => (
          <TableRow key={item.id} data={item.data} />
        ))}
      </tbody>
    </table>
  );
}
