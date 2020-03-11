import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import TypesConsult from './TypesConsult'

const TypesList = () => {
  console.log("teste de consumo de dados TYPES LIST 0")
  const [sortBy] = useState('NAME_ASC')
  const types = TypesConsult(sortBy)

  return (
    <div className="container mt-5 mb-5">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Produto</th>
          </tr>
        </thead>
        <tbody>
          {types.map((type => 
            <tr>
              <td key={type.id}>{type.id}</td>
              <td>{type.typeName}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}
console.log("teste de consumo de dados PRODUCT LIST 1")
export default TypesList