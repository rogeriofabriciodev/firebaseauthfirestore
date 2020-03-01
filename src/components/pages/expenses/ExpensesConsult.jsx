import { useState, useEffect } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const SORT_OPTIONS = {
  'NAME_ASC': { column: 'typeName', direction: 'asc'}
}
console.log("teste de consumo de dados TYPE CONSULT 0")

function ExpensesConsult(sortBy = 'NAME_ASC') {
  console.log("teste de consumo de dados TYPE CONSULT 1")

  const [ expenses, setExpenses ] = useState([])
  const userID = firebase.auth().currentUser.uid

  useEffect(() => {
    console.log("teste de consumo de dados TYPE CONSULT 2")
    const unsubscribe = firebase
                        .firestore()
                        .collection('dados/'+userID+'/expenses')
                        .orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)
                        .onSnapshot((snapshot) => {
                          const newExpense = snapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data()
                          }))
                          console.log("teste de consumo de dados TYPE CONSULT 3")
                          setExpenses(newExpense)

                        })
                        console.log("teste de consumo de dados TYPE CONSULT 4")
                        return() => unsubscribe()
  }, [sortBy])
  console.log("teste de consumo de dados TYPE CONSULT 5")

  return expenses

}
console.log("teste de consumo de dados TYPE CONSULT 6")
export default ExpensesConsult
