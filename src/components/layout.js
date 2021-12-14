import { Container, Row, Col } from 'react-bootstrap'
import Nav from './nav'

const Layout = ({ children, seo, global }) => (
  <Container fluid padding={0}>
    <Row>
      <Col>
        <Nav global={global} />
      </Col>
    </Row>
    <Row className="content">{children}</Row>
  </Container>
)

export default Layout
