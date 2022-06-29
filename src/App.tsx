import Footer from "./shared/components/Footer"
import { LinkProvider } from "./shared/contexts/LinkContext"
import GeradorQR from "./pages/GeradorQR"
import { Container } from "./styleApp"
import { ThemeProvider } from "./shared/contexts/ThemeContext"

function App() {

  return (
    
    <ThemeProvider>
      <Container>
        <LinkProvider >
        <GeradorQR />
        <Footer />
        </LinkProvider>
      </Container>
    </ThemeProvider>
  )
}

export default App
