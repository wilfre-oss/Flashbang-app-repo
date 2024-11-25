import {firebaseConfig} from "./firebaseConfig.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, get, ref, set, onValue, update } from "firebase/database";
import { initializeApp } from 'firebase/app';

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);


function signUpUser(credentials, callback){
  createUserWithEmailAndPassword(getAuth(), credentials.email, credentials.password).then(callback);
};

function signInUser(credentials, callback){
  signInWithEmailAndPassword(getAuth(), credentials.email, credentials.password)
  .then(callback)
  .catch(err => {
    console.log(err)
  });
};

function getData(callback){
  let path = '/'+getAuth().currentUser.uid.toString();
  /*
  get(ref(db, path)).then((snapshot) => {
    if(snapshot.exists()){
      console.log(snapshot.val());
    }

    else{
      console.log("No data available");
    }
  });*/
  get(ref(db, path)).then(callback);
}

function storeData(data){
    let path = '/'+getAuth().currentUser.uid.toString(); 
  set(ref(db, path), data);
}

function lightControl(data, device = 1){
  let path = '/' + device
  set(ref(db, path), data)
}

function updateModelFromFirebase(updateModel){
  let path = '/'+getAuth().currentUser.uid.toString();
  onValue(ref(db, path), (snapshot) => {
    const data = snapshot.val()
    updateModel(data)
  })
}

export {getData, storeData, signUpUser, signInUser, lightControl, updateModelFromFirebase};
