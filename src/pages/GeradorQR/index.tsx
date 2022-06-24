import React, { useContext, useState } from 'react';
import QRCodes from '../../components/QRCodes';
import { LinkContext } from '../../contexts/LinkContext';
import { Box, Container, Form, Input, Title } from './style';

function GeradorQR() {
  const [url, setUrl] = useState("")
  const [value, setValue] = useState<string>()
  const [loading, setLoading] = useState(false)
  
  const { setLink } = useContext(LinkContext)

  const handlerGetQR = (e: any) => {
    e.preventDefault()
    const countURL = url?.length
    countURL > 3 && setLoading(true)
    if ( countURL < 3 ) {
      return
    }
    setValue(url)
    setLink(url)
    setLoading(false)
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
      { loading && <p>Carregando...</p>}
      { value && <QRCodes />}
    </Container>
  );
}

export default GeradorQR;