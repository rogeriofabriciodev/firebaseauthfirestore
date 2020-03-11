import React, {Component} from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Dashboard from './components/dashboard/Dashboard'
import MenuSignIn from './components/nav/MenuSignIn'
import MenuSignOut from './components/nav/MenuSignOut'
import Types from './components/pages/types/Types'
import TypesList from './components/pages/types/TypesList'
import Expenses from './components/pages/expenses/Expenses'
import ExpensesList from './components/pages/expenses/ExpensesList'
import PageOne from './components/pages/PageOne'



firebase.initializeApp({
  apiKey: "AIzaSyCzfsrG9kMa3WMN8lQaWb-CVTSuMhiPSa4",
  authDomain: "modelos-bd7ce.firebaseapp.com",
  databaseURL: "https://modelos-bd7ce.firebaseio.com",
  projectId: "modelos-bd7ce",
  storageBucket: "modelos-bd7ce.appspot.com",
  messagingSenderId: "62676934495",
  appId: "1:62676934495:web:2e8b8e85f738ef7d53a0ea",
  measurementId: "G-VJYLFD7BVY"
})

class App extends Component {
  state = { signInSuccessWithAuthResult: false }
  
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false
    }
  }

componentDidMount = () => {
  firebase.auth().onAuthStateChanged(user => {
    this.setState({isSignedIn:!!user})
  })
}

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {this.state.isSignedIn ? (
            <Switch>
              <div>
                <MenuSignIn />
                <Route exact path='/' component={Dashboard} />
                <Route path='/addtypes' component={Types} />
                <Route path='/listtypes' component={TypesList} />
                <Route path='/addexpenses' component={Expenses} />
                <Route path='/listexpenses' component={ExpensesList} />
                <Route path='/pageone' component={PageOne} />
              </div>
            </Switch>
          ) : (
              <div>
                <MenuSignOut />
                <h1 className="mb-3">Faça Login</h1>
                <StyledFirebaseAuth
                  uiConfig={this.uiConfig}
                  firebaseAuth={firebase.auth()}
                />
              </div>
            )}
        </div>
      </BrowserRouter>
    )
  }
}
  

export default App