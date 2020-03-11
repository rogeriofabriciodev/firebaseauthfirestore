import React,{ useState, useEffect } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const ReducePage = () => {

    const [expenses, setExpenses] = useState([])
    const userID = firebase.auth().currentUser.uid

    useEffect(() => {
        const unsubscribe = firebase
            .firestore()
            .collection('dados/' + userID + '/expenses')
            .onSnapshot((snapshot) => {
                const newExpense = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setExpenses(newExpense)
            })
        return () => unsubscribe()
    })
    console.log(expenses)
    // var sum = expenses.reduce( function( prevVal, elem ) {
    //     return prevVal + elem.expenseValue;
    // }, 0 );
     
    // // ES6
    // // rockets.reduce( ( prevVal, elem ) => prevVal + elem.launches, 0 ); 
     
    // console.log(expenses) // 85
    

    return expenses

}


export default ReducePage