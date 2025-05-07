import React, { useMemo } from "react";
//
import { DAYS } from "@/utils/constant";
//
import {
  addDays,
  differenceInDays,
  endOfMonth,
  getDay,
  isSameDay,
  startOfMonth,
} from "date-fns";
//
import clsx from "clsx";

interface ICalendarBodyProps {
  todaysDate: Date;
  month: number; // 0-based
  year: number;
}

const baseCellClass =
  "min-w-full h-28 p-3 border-r-[.85px] border-b-[.85px] border-zinc-200 last:border-r-0";

export default function ClendarBody({
  todaysDate,
  month,
  year,
}: ICalendarBodyProps) {
  const selectedDate = useMemo(() => new Date(year, month), [month, year]);

  const startOfMonthValue = useMemo(
    () => startOfMonth(selectedDate),
    [selectedDate]
  );

  const endOfMonthValue = useMemo(
    () => endOfMonth(selectedDate),
    [selectedDate]
  );

  // Total days in month
  const totalDaysInMonth = useMemo(
    () => differenceInDays(endOfMonthValue, startOfMonthValue) + 1,
    [endOfMonthValue, startOfMonthValue]
  );

  const startDayOffset = useMemo(
    () => getDay(startOfMonthValue),
    [startOfMonthValue]
  ); // Now 0 (Sun) - 6 (Sat)

  const totalCells = startDayOffset + totalDaysInMonth;

  const totalRows = Math.ceil(totalCells / 7);

  const calendarDates = useMemo(() => {
    return Array.from({ length: totalRows * 7 }, (_, i) =>
      addDays(startOfMonthValue, i - startDayOffset)
    );
  }, [startOfMonthValue, totalRows, startDayOffset]);

  const rows = Array.from({ length: totalRows });
  const colums = Array.from({ length: 7 });

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
                    {day.label.substring(0, 3)}
                  </span>

                  {false && (
                    <div className="flex items-center justify-center rounded-md bg-blue-400 w-[25px] h-[25px]">
                      <span className="text-sm font-semibold text-white">
                        20
                      </span>
                    </div>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>

        {/* dates */}
        <tbody>
          {/* rows */}
          {rows.map((_, rowIndex) => (
            <tr key={rowIndex}>
              {/* columns */}
              {colums.map((_, colIndex) => {
                const cellIndex = rowIndex * 7 + colIndex;

                const date = calendarDates[cellIndex];

                const isCurrentMonth =
                  cellIndex >= startDayOffset &&
                  cellIndex < startDayOffset + totalDaysInMonth;

                const isToday = isSameDay(
                  date.toDateString(),
                  todaysDate.toDateString()
                );

                return (
                  <td
                    key={colIndex}
                    className={clsx(baseCellClass, {
                      "bg-zinc-50": !isCurrentMonth,
                    })}
                  >
                    <div className={clsx("w-full h-full")}>
                      <p
                        className={clsx("mb-auto text-sm font-semibold", {
                          "text-white w-6 h-6 flex items-center justify-center rounded-full bg-blue-500":
                            isToday,
                          "text-zinc-600": isCurrentMonth && !isToday,
                          "text-zinc-300": !isCurrentMonth,
                        })}
                      >
                        {date.getDate()}
                      </p>
                    </div>

                    {/* Notes */}
                    <div></div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
       
    </div>
  );
}
