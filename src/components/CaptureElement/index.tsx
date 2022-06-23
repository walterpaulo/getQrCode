import html2canvas from 'html2canvas';
import React from 'react';
import { BoxSVG} from './style';

type Props = {
  element?: HTMLElement
};

const CaptureElement:React.FC<Props> = ({element}) => {
  const captureElement = async () => {
    const element = document.getElementById("IImage");
    html2canvas(element, { useCORS: true }).then(canvas => {
      let a = document.createElement("a");
      document.body.appendChild(a);
      a.download = "codeqr.png";
      a.href = canvas.toDataURL();
      a.click();
    });
    }

  return (
    <BoxSVG onClick={captureElement}>
    </BoxSVG>
    );
}

export default CaptureElement;