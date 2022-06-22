import React, { useState } from 'react';
import QRCode from '../../components/QRCode';
import { Box, Container, Form, Input, Title } from './style';

function GeradorQR() {
  const [url, setUrl] = useState<string>("")
  const [value, setValue] = useState<string>()

  const handlerGetQR = (e: any) => {
    e.preventDefault()
    const countURL = url?.length
    if ( countURL < 3 ) {
      return
    }
    setValue(url)
    setUrl("")
  }

  return (
    <Container>
      <Title>GetQrCode+</Title>
      <Form onClick={handlerGetQR}>
        <Box>
          <Input placeholder='Digite url' type="text" value={url} onChange={(e)=>{setUrl(e.target.value)}} />
          <Input {...url.length < 3 && 'disabled'} type="submit" value="Converter" />
        </Box>
      </Form>
      <QRCode url={value} />
    </Container>
  );
}

export default GeradorQR;