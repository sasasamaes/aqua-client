import React from 'react'
import { Form, Button, Col } from 'react-bootstrap'

const FormComponent = ({ homepage, lg, global }) => {
  return (
    <Col lg={lg} className="form-container bg-dark" padding={0}>
      <Col lg={12} className="form-container-logo">
        <img src={global?.logo2?.url} alt={global?.logo2?.caption} />
      </Col>
      <Col lg={12} className="form-container-info text-light">
        <p>{homepage && homepage.form.description}</p>
        <h2>{homepage && homepage.form.price}</h2>
        <span>{homepage && homepage.form.caption}</span>
      </Col>
      <Col lg={12} className="form-container-form text-light">
        <Form>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Control type="text" placeholder="Nombre Completo*" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Control type="email" placeholder="Correo*" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formTel">
            <Form.Control type="text" placeholder="Teléfono*" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Control type="text" placeholder="Motivo de interés*" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formComments">
            <Form.Control as="textarea" rows={3} placeholder="Comentarios*" />
          </Form.Group>
          <Button variant="primary" type="submit">
            {homepage && homepage.form.btnText}
          </Button>
        </Form>
      </Col>
      <Col lg={12} className="form-container-disclaimer text-light">
        <span className="text-light">{homepage && homepage.form.caption2}</span>
      </Col>
    </Col>
  )
}

export default FormComponent
