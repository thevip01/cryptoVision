import {
    Card,
    CardHeader,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter,
    Avatar,
    IconButton,
    Tooltip,
    Input,
} from "@material-tailwind/react";
import React from "react";

import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

export function TransactionsTable({ TABLE_ROWS, TABLE_HEAD, TITLE, PAGINATIONREQ, ACTIVE = 0, PAGES = 0, ONPAGECHANGE = e => { } }) {

    return (
        <Card className="h-full w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
                    <div>
                        <Typography variant="h3" color="blue-gray">
                            {TITLE}
                        </Typography>
                    </div>
                </div>
            </CardHeader>
            <CardBody className="overflow-scroll px-0">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th
                                    key={head}
                                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {TABLE_ROWS.map(
                            (
                                item,
                                index,
                            ) => {
                                const isLast = index === TABLE_ROWS.length - 1;
                                const classes = isLast
                                    ? "p-4"
                                    : "p-4 border-b border-blue-gray-50";
                                return (
                                    <tr key={item['symbol']}>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {item?.rank}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <a target="blank" href={item?.coinrankingUrl}>
                                                <div className="flex items-center gap-3">
                                                    <Avatar
                                                        src={item.iconUrl}
                                                        alt={item.name}
                                                        size="md"
                                                        className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                                                    />
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-bold"
                                                    >
                                                        {item.name}
                                                    </Typography>
                                                </div>
                                            </a>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                $ {convertToInternationalCurrencySystem(item.price)}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                $ {convertToInternationalCurrencySystem(item.marketCap)}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <a target="blank" href={item?.coinrankingUrl}>
                                                <Sparklines data={item?.sparkline} className='w-fit'>
                                                    <SparklinesLine style={{ fill: "green" }} />
                                                    <SparklinesSpots />
                                                </Sparklines>
                                            </a>
                                        </td>
                                    </tr>
                                );
                            },
                        )}
                    </tbody>
                </table>
            </CardBody>
            {PAGINATIONREQ &&
                <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                        Page {ACTIVE} of {PAGES}
                    </Typography>
                    <div className="flex gap-2">
                        <Button variant="outlined" size="sm" onClick={e => ONPAGECHANGE(ACTIVE - 1)}>
                            Previous
                        </Button>
                        <Button variant="outlined" size="sm" onClick={e => ONPAGECHANGE(ACTIVE + 1)}>
                            Next
                        </Button>
                    </div>
                </CardFooter>
            }
        </Card>
    );
}

function convertToInternationalCurrencySystem(labelValue) {

    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e+9

        ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + "B"
        // Six Zeroes for Millions 
        : Math.abs(Number(labelValue)) >= 1.0e+6

            ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + "M"
            // Three Zeroes for Thousands
            : Math.abs(Number(labelValue)) >= 1.0e+3

                ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + "K"

                : Math.abs(Number(labelValue));

}