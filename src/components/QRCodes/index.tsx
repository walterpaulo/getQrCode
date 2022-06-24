import React, { useContext } from 'react';
import { Container, Image, TextUrl } from './style';
import { QRCodeSVG } from 'qrcode.react'
import CaptureElement from '../CaptureElement';
import { LinkContext } from '../../contexts/LinkContext';

const QRCodes = ()=> {
  const { link } = useContext(LinkContext)

  return (
    <Container id='IImage'>
      <CaptureElement element="IImage" />
      <Image>
      <QRCodeSVG
        value={link}
        size={290}
        level={"H"}
        includeMargin={true}
    />
      </Image>
      <TextUrl>
      {link}
      </TextUrl>
    </Container>
  );
}

export default QRCodes;