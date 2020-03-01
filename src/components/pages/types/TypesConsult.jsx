import { useState, useEffect } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const SORT_OPTIONS = {
  'NAME_ASC': { column: 'typeName', direction: 'asc'}
}
console.log("teste de consumo de dados TYPE CONSULT 0")

function TypesConsult(sortBy = 'NAME_ASC') {
  console.log("teste de consumo de dados TYPE CONSULT 1")

  const [ typeNames, setTypeNames ] = useState([])
  const userID = firebase.auth().currentUser.uid

  useEffect(() => {
    console.log("teste de consumo de dados TYPE CONSULT 2")
    const unsubscribe = firebase
                        .firestore()
                        .collection('dados/'+userID+'/types')
                        .orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)
                        .onSnapshot((snapshot) => {
                          const newType = snapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data()
                          }))
                          console.log("teste de consumo de dados TYPE CONSULT 3")
                          setTypeNames(newType)

                        })
                        console.log("teste de consumo de dados TYPE CONSULT 4")
                        return() => unsubscribe()
  }, [sortBy])
  console.log("teste de consumo de dados TYPE CONSULT 5")

  return typeNames

}
console.log("teste de consumo de dados TYPE CONSULT 6")
export default TypesConsult
