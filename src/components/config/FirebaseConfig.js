import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCfeRvvRf6-Hw7eeamdvzpEbhnO8Vm_rso",
    authDomain: "zapp-ac004.firebaseapp.com",
    databaseURL: "https://zapp-ac004.firebaseio.com",
    projectId: "zapp-ac004",
    storageBucket: "zapp-ac004.appspot.com",
    messagingSenderId: "1077277342809",
    appId: "1:1077277342809:web:86287ba9a7547b01ca4548",
    measurementId: "G-3B145FECWE"
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