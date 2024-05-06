import React from "react"
import { Card, CardHeader, CardBody } from '@nextui-org/react'
import { Input } from "@nextui-org/input";
import { useState } from "react";

export function Welcome() {
    const [userName, setUserName] = useState('');
    
    return(
      <>
        <Card>
            <CardBody>
                <CardHeader>
                    <h1>Bienvenido</h1>
                </CardHeader> 

                <Input
                    key="outside-left"
                    type="text"
                    label="username"
                    labelPlacement="outside-left"
                    value={userName}
                    onChange={e => setUserName(e.target.value) }
                />

                <p>Pel·lícules per a l’estiu.</p>
            </CardBody> 
        </Card>
     </>
    );
}