import React, { useContext } from 'react';
import { Container, Image, TextUrl } from './style';
import QRCode from 'qrcode.react'
import CaptureElement from '../CaptureElement';
import { LinkContext } from '../../contexts/LinkContext';

const QRCodes = ()=> {
  const { link } = useContext(LinkContext)

  return (
    <Container id='IImage'>
      <CaptureElement element="IImage" />
      <Image>
      <QRCode
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