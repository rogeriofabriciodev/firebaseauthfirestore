import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import ExpensesConsult from './ExpensesConsult'

const ExpensesList = () => {
  console.log("teste de consumo de dados TYPES LIST 0")
  const [sortBy] = useState('NAME_ASC')
  const expenses = ExpensesConsult(sortBy)

  return (
    <div className="container mt-5 mb-5">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Despensa</th>
            <th>Tipo</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense => 
            <tr>
              <td width="33%" key={expense.id}>{expense.expenseName}</td>
              <td width="33%">{expense.typeName}</td>
              <td width="33%">{expense.expenseValue}</td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td>Total</td>
            <td>R$</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}
console.log("teste de consumo de dados PRODUCT LIST 1")
export default ExpensesList