import {
    Card,
    CardHeader,
    CardFooter,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import React from "react";

export function HorizontalCard({ thumbnail, title, description, moreLink }) {
    return (
        <Card className="h-[450px] content-between gap-auto">
            <CardHeader color="blue-gray" className="relative h-[160px]">
                <img
                    src={`${thumbnail ? thumbnail : "https://img.freepik.com/free-photo/newspaper-background-concept_23-2149501636.jpg?w=996&t=st=1697535305~exp=1697535905~hmac=c12e41cd4210989b8ec04b7547bafe4ff3b713c5858dc196eda14f970147e5b3"}`}
                    alt="card-image"
                />
            </CardHeader>
            <CardBody className="h-[220px]">
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    {title}
                </Typography>
                <Typography>
                    {description}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0 h-[30px]">
                <a href={moreLink} target="blank" className="inline-block">
                    <Button>Read More</Button>
                </a>
            </CardFooter>
        </Card>
    )
}