import React from "react";
//
import { DAYS } from "@/utils/constant";
//

export default function ClendarBody() {
  return (
    <div className="rounded-lg border-[.85px] border-zinc-300">
      <table className="w-full h-full table-fixed border-collapse">
        <thead>
          <tr>
            {DAYS.map((day, index) => (
              <th
                key={day.value}
                className="text-center px-6 py-3 border-b-[.85px] border-zinc-300"
              >
                <div className="flex justify-center items-center gap-2">
                  <span className="text-sm font-semibold text-zinc-600">
                    {day.label}
                  </span>

                  {/* Current date - tag ( current_tab === WEEK )*/}
                  {index == 3 && (
                    <div className="flex items-center justify-center rounded-md bg-blue-400 w-[25px] h-[25px]">
                      <span className="text-sm font-semibold text-white">20</span>
                    </div>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>

        {/* dates */}
        <tbody>
          {[...Array(5)].map((_, index1) => (
            <tr className="">
              {/* Date */}
              {[...Array(7)].map((_, index2) => (
                <td className="min-w-full h-24 p-3 border-r-[.85px] border-b-[.85px] border-zinc-200 last:border-r-0">
                  <div className="w-full h-full">
                    <p className="mb-auto text-sm font-semibold text-zinc-600">
                      {index1 + ".," + index2}
                    </p>
                  </div>

                  {/* Notes */}
                  <div></div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
       
    </div>
  );
}
