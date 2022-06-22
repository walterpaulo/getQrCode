import React, { useEffect, useState } from 'react';
import { Container, Image } from './style';
import QRCode from 'qrcode'

type TProps = {
    url?: string;
}

const QRCodes:React.FC<TProps> = ({url})=> {
  const [codeQR, setCodeQr] = useState<any>()
  
  useEffect(()=>{
    const generateQR = async (url: string ) => {
      try {
          if( url.length < 1){
            return
          }

        QRCode.toString(url, (err: any, data: any) => {
            setCodeQr(ConvertStringToHTML(data, "image/svg+xml").activeElement?.children[0].nextElementSibling.attributes[1].nodeValue)
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
    <Container>
        <Image>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29" shapeRendering="crispEdges">
          <path fill="#ffffff" d="M0 0h29v29H0z"/>
          <path stroke="#000000" d={codeQR}/>
        </svg>
        </Image>
        {url}
    </Container>
  );
}

export default QRCodes;