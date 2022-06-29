import html2canvas from 'html2canvas';
import React, { useContext } from 'react';
import { LinkContext } from '../../contexts/LinkContext';
import { BoxSVG} from './style';

type Props = {
  element: string;
};

const CaptureElement:React.FC<Props> = (prop) => {

  const { link } = useContext(LinkContext)

  const captureElement = async () => {
    const element = document.getElementById(prop.element);
    if (element){
      html2canvas(element, { useCORS: true }).then(canvas => {
        let a = document.createElement("a");
        document.body.appendChild(a);
        a.download = link;
        a.href = canvas.toDataURL();
        a.click();
      });
    }
    }

  return (
    <BoxSVG onClick={captureElement} />
    );
}

export default CaptureElement;