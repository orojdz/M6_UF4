import React from "react";
import { Card, CardFooter, CardBody } from "@nextui-org/react";
import {Image} from "@nextui-org/image";

export function MovieCard({ title, image, rate, direction }) {
    return(
        <Card className="py-4" shadow="sm">
            <CardBody className="overflow-visible py-2">
                <Image 
                    className="object-cover rounded-xl"
                    width={240}
                    alt={title}
                    src={image}
                />
            </CardBody>
            <CardFooter  className="pb-0 pt-2 px-4 flex-col items-start">
                <h3 className="font-bold text-large">{title}</h3>
                <p className="text-tiny uppercase font-bold">Director: {direction}</p>
                <small className="text-default-500"> Rate: {rate} </small>
            </CardFooter>
        </Card>
    );
}
