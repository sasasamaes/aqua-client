import { Container, Row } from 'react-bootstrap'

const Layout = ({ children }) => (
  <Container padding={0} fluid>
    <Row>{children}</Row>
  </Container>
)

export default Layout
