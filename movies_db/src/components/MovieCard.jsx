import React from "react";
import { Card, CardFooter, CardBody, Image } from "@nextui-org/react";

export function MovieCard({ title, image, rate, direction }) {
    return(
        <Card shadow="sm">
            <CardBody>
                <Image 
                    shadow="sm"
                    width="100%"
                    alt={title}
                    className="movie-cover"
                    src={image}
                />
            </CardBody>
            <CardFooter className="movie-title">
                <b>{title}</b>
                <p className="text-default-500"> {rate} </p>
                <p>{direction}</p>
            </CardFooter>
        </Card>
    );
}
