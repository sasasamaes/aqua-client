import { Container, Row, Col } from 'react-bootstrap'
import Nav from './nav'

const Layout = ({ children, seo, global }) => (
  <Container fluid padding={0}>
    <Col>
      <Nav global={global} />
    </Col>
    <Row className="content">{children}</Row>
  </Container>
)

export default Layout
