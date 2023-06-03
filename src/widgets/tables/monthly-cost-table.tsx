import {Card, CardBody, CardFooter, CardHeader, Chip, Typography} from "@material-tailwind/react";
import {CostData, CostEntry} from "@/data";
import React from "react";


type TableProperties = {
  data: CostData
}

const currencyFormat = new Intl.NumberFormat('pl-PL', {
  style: 'currency',
  currency: 'PLN',
});

function formatNumberWithUnit(number: number, unit: string): string {
  const formattedNumber = number.toFixed(2); // Format number to 2 decimal places
  return `${formattedNumber} ${unit}`;
}

export function MonthlyCostTable(props: TableProperties): JSX.Element {

  return (
    <Card className="overflow-hidden xl:col-span-2">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 flex items-center justify-between p-6"
      >
        <div className="flex items-center flex-row justify-start space-x-2">
          <Typography variant="h6" color="blue-gray" className="mb-1">
            Elementy opłat
          </Typography>
          <Chip
            size="sm"
            variant="ghost"
            color="green"
            value="Aktualne"
            icon={<span className="content-[''] block w-2 h-2 rounded-full mx-auto mt-1 bg-green-900"/>}
          />
          <Chip
            size="sm"
            variant="ghost"
            color="red"
            value="Brak Płatności"
            icon={<span className="content-[''] block w-2 h-2 rounded-full mx-auto mt-1 bg-red-900"/>}
          />
        </div>
      </CardHeader>
      <CardBody className="px-0 pt-0 pb-2">
        <table className="w-full min-w-[640px] table-auto">
          <thead>
          <tr>
            {["Usługa", "ilość", "cena", "kwota"].map(
              (el) => (
                <th
                  key={el}
                  className="border-b border-blue-gray-50 py-3 px-6 text-left"
                >
                  <Typography
                    variant="small"
                    className="text-[11px] font-medium uppercase text-blue-gray-400"
                  >
                    {el}
                  </Typography>
                </th>
              )
            )}
          </tr>
          </thead>
          <tbody>
          {props.data.entries.map(
            (entry: CostEntry, key: number) => {
              const className = `py-3 px-5 ${
                key === props.data.entries.length - 1
                  ? ""
                  : "border-b border-blue-gray-50"
              }`;

              return (
                <tr key={entry.name}>
                  <td className={className}>
                    <div className="flex items-center gap-4">
                      {React.createElement(entry.img.icon, {
                        className: `!w-10 !h-10 ${entry.img.color}`,
                      })}
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold"
                      >
                        {entry.name}
                      </Typography>
                    </div>
                  </td>
                  <td className={className}>
                    <Typography
                      variant="small"
                      className="text-xs font-medium text-blue-gray-600"
                    >
                      {formatNumberWithUnit(entry.quantity, entry.unit)}
                    </Typography>
                  </td>
                  <td className={className}>
                    <Typography
                      variant="small"
                      className="text-xs font-medium text-blue-gray-600"
                    >
                      {currencyFormat.format(entry.price)}
                    </Typography>
                  </td>
                  <td className={className}>
                    <div className="w-10/12">
                      <Typography
                        variant="small"
                        className="text-xs font-big font-bold text-blue-gray-600"
                      >
                        {currencyFormat.format(entry.quantity * entry.price)}
                      </Typography>
                    </div>
                  </td>
                </tr>
              );
            }
          )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter>
        <div className="flex flex-row justify-end">
          <Typography variant="h5" color="blue-gray" className="mb-1 font-normal">
            Razem :&nbsp;
          </Typography>
          <Typography variant="h5" color="blue-gray" className="mb-1 font-extrabold">
            {
              currencyFormat.format(props.data.entries
                .map(e => e.quantity * e.price)
                .reduce((sum, current) => sum + current))
            }
          </Typography>
        </div>
      </CardFooter>
    </Card>
  )
}