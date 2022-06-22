import React, { useState } from 'react';
import { Container, Image } from './style';

type TProps = {
    url?: string;
}

const QRCode:React.FC<TProps> = ({url})=> {
    return (
        <Container>
            <Image></Image>
            {url}
        </Container>
    );
}

export default QRCode;