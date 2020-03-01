import React, { useState } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import TypesConsult from '../types/TypesConsult'

const Expenses = () => {

  const types = TypesConsult()

  const [ expenseName, setExpenseName ] = useState('')
  const [ typeName, setTypeName ] = useState('')
  const [ expenseValue, setExpenseValue ] = useState('')
  
  function submitData(e) {
    e.preventDefault()

    const userID = firebase.auth().currentUser.uid
    console.log(userID)
    const dateNow = new Date()
    const createAt = dateNow
    const updateAt = dateNow

    firebase
    .firestore()
    .collection('dados/'+userID+'/expenses')
    .add({
      expenseName,
      typeName,
      expenseValue,
      createAt,
      updateAt
    }).then(() => {
      setExpenseName('')
      setTypeName('')
      setExpenseValue('')
    })
  }

  return(
    <div className="container">
      <div className="mt-5">
        <Row className="justify-content-center">
          <Col className="col-6">
          <Form onSubmit={ submitData }>
            <Form.Group controlId="formBasicExpenseName">
              <Form.Label>Despesa</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Descrição de Despesa" 
                value={ expenseName } 
                onChange={ e => setExpenseName(e.currentTarget.value) } />
              <Form.Text className="text-muted">
                Descreva o tipo de despesa que irá classificar a saíde de recursos.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelectType">
              <Form.Label>Tipo de Despesa</Form.Label>
              <Form.Control as="select" 
                value={ typeName } 
                onChange={e => setTypeName(e.currentTarget.value)}>
                <option selected disabled value="">Tipo de Despesa</option>
                  { types.map((type =>
                    <option key={type.id} value={type.typeName}>{ type.typeName }</option>
                  ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formBasicExpenseValue">
              <Form.Label>Valor</Form.Label>
              <Form.Control 
                type="number" 
                placeholder="0.00" 
                value={ expenseValue } 
                onChange={ e => setExpenseValue(e.currentTarget.value) } />
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

export default Expenses