import React from "react";

export interface ITableHeadItemProps {
  item: string;
}

export default function TableHeadItem({ item }: ITableHeadItemProps) {
  return (
    <th
      title={item}
      scope="col"
      className="p-4 text-sm font-semibold text-zinc-600 text-left first:rounded-tl-xl first:rounded-bl-xl last:rounded-tr-xl last:rounded-br-xl"
    >
      {item}
    </th>
  );
}
