import Footer from "./components/Footer"
import { LinkProvider } from "./contexts/LinkContext"
import GeradorQR from "./pages/GeradorQR"
import { Container } from "./styleApp"

function App() {

  return (
    <Container>
      <LinkProvider >
      <GeradorQR />
      <Footer />
      </LinkProvider>
    </Container>
  )
}

export default App
