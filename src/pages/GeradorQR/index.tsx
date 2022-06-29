import React, { useContext, useState } from 'react';
import QRCodes from '../../shared/components/QRCodes';
import { LinkContext } from '../../shared/contexts/LinkContext';
import { Box, Container, Form, Input, Title } from './style';

function GeradorQR() {
  const [url, setUrl] = useState("")
  const [value, setValue] = useState<string>()
  const [loading, setLoading] = useState(false)
  
  const { setLink } = useContext(LinkContext)

  function isValidHttpUrl(inputUrl: string) {
    const expression =/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    const regex = new RegExp(expression);
    if (inputUrl.match(regex)) {
      return true
    } else {
      return false
    }
  }
  
  const handlerGetQR = (e: any) => {
    e.preventDefault()
    
    const countURL = url?.length
    countURL > 3 && setLoading(true)
    
    if(isValidHttpUrl(url)){
      setValue(url)
      setLink(url)
      setLoading(false)
      setUrl("")
    }else{
      setValue('')
    }
  }

  return (
    <Container>
      <Title>GetQrCode+</Title>
      <Form onClick={handlerGetQR}>
        <Box>
          <Input placeholder='Digite url' type="text" value={url} onChange={(e)=>{setUrl(e.target.value)}} />
          <Input type="submit" value="Converter" />
        </Box>
      </Form>
      { loading && <p>Carregando...</p>}
      { value && <QRCodes />}
    </Container>
  );
}

export default GeradorQR;