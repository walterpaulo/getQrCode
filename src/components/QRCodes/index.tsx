import React, { useEffect, useState } from 'react';
import { Container, Image, TextUrl } from './style';
import QRCode from 'qrcode'
import html2canvas from 'html2canvas';
import CaptureElement from '../CaptureElement';

type TProps = {
    url?: string;
}

const QRCodes:React.FC<TProps> = ({url})=> {
  const [codeQR, setCodeQr] = useState<any>()
  const [viewBox, setViewBox] = useState<any>()
  
  useEffect(()=>{
    const generateQR = async (url: string ) => {
      try {
          if( url.length < 1){
            return
          }

        QRCode.toString(url, (err: any, data: any) => {
          const html = ConvertStringToHTML(data, 'image/svg+xml').activeElement?.children[0]
          setCodeQr(html.nextElementSibling.attributes[1].nodeValue)
          setViewBox(html.nearestViewportElement.attributes[1].nodeValue)
        })

      } catch (err) {
        console.error(err)
      }
    }
    generateQR(url || "")
  })

  const ConvertStringToHTML = function (str: string) {
    const parser = new DOMParser();

    const svgString = str;
    const doc = parser.parseFromString(svgString, "image/svg+xml");
    return doc
 };

  return (
    <Container id='IImage'>
        <CaptureElement element="IImage" />
        <Image onClick={(e)=>{console.log(e)}}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox} shapeRendering="crispEdges">
          <path fill="#ffffff" d="M0 0h100v100H0z"/>
          <path stroke="#000000" d={codeQR}/>
        </svg>
        </Image>
        <TextUrl>
        {url}
        </TextUrl>
    </Container>
  );
}

export default QRCodes;