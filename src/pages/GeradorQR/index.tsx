import React, { useState } from 'react';
import { Box, Container, Form, Input, Title } from './style';

function GeradorQR() {
  const [url, setUrl] = useState<string>()

  const handlerGetQR = (e: any) => {
    e.preventDefault()
    console.log(url)
    setUrl("")
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
    </Container>
  );
}

export default GeradorQR;