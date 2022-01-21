import { Container, Row } from 'react-bootstrap'

const Layout = ({ children }) => (
  <Container padding={0}>
    <Row className="content">{children}</Row>
  </Container>
)

export default Layout
