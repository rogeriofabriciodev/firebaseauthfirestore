import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyCzfsrG9kMa3WMN8lQaWb-CVTSuMhiPSa4",
  authDomain: "modelos-bd7ce.firebaseapp.com",
  databaseURL: "https://modelos-bd7ce.firebaseio.com",
  projectId: "modelos-bd7ce",
  storageBucket: "modelos-bd7ce.appspot.com",
  messagingSenderId: "62676934495",
  appId: "1:62676934495:web:2e8b8e85f738ef7d53a0ea",
  measurementId: "G-VJYLFD7BVY"
  };

  class Firebase {
    constructor() {
      firebase.initializeApp(firebaseConfig);
      this.auth = firebase.auth()
      this.db = firebase.firestore()
    }

    // login(email, password) {
    //   return this.auth.signInWithEmailAndPassword(email, password)
    // }

    // logout() {
    //   return this.auth.signOut()
    // }

    // async register(name, email, password) {
    //   await this.auth.createUserWithEmailAndPassword(email, password)
    //   return this.auth.currentUser.updateProfile({
    //     displayName: name
    //   })
    // }

    // addQuote(quote) {
    //   if(!this.auth.currentUser) {
    //     return alert('Não Autorizado!')
    //   }
    //   return this.db.auth.doc('users_codedamn_video/${this.auth.currentUser.uid}').set({
    //     quote
    //   })
    // }

    // isInitialized() {
    //   return new Promise(resolve => {
    //     this.auth.onAuthStateChanged(resolve)
    //   })
    // }

    // getCurrentUserName() {
    //   return this.auth.currentUser.displayName
    // }
  }

  export default new Firebase()