import React, { useState } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const Types = () => {

  const [ typeName, setTypeName ] = useState('')
  
  function submitData(e) {
    e.preventDefault()

    const userID = firebase.auth().currentUser.uid
    console.log(userID)
    const dateNow = new Date()
    const createAt = dateNow
    const updateAt = dateNow

    firebase
    .firestore()
    .collection('dados/'+userID+'/types')
    .add({
      typeName,
      createAt,
      updateAt
    }).then(() => {
      setTypeName('')
    })
  }

  return(
    <div className="container">
      <div className="mt-5">
        <Row className="justify-content-center">
          <Col className="col-6">
          <Form onSubmit={ submitData }>
            <Form.Group controlId="formBasicType">
              <Form.Label>Tipo de Despesa</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Tipo de Despesa" 
                value={ typeName } 
                onChange={ e => setTypeName(e.currentTarget.value) } />
              <Form.Text className="text-muted">
                Descreva o tipo de despesa que irá classificar a saíde de recursos.
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Salvar
            </Button>
          </Form>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Types