import React from 'react';

import { Button, Header, Center } from "../"


const Error = ({onRetry}) => (
    <Center>
        <Header centered>
            Ops!
        </Header>
        <p>Ocorreu um erro inesperado ao carregar a lista de notas</p>
        <Button onClick={onRetry} >Tentar novamente</Button>
    </Center>
)


export default Error;