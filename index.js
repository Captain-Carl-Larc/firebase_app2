//importing the function
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
//import getDatabase fun
import {getDatabase,ref,push} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


//url object 
const appSettings = {
    databaseURL: "https://playground-40f32-default-rtdb.firebaseio.com/"
}

//app variable
const app = initializeApp(appSettings)
const database = getDatabase(app)

//creating reference
const moviesInDB = ref(database, "movies")


const addBtn=document.getElementById("add-btn")
const inputEl=document.getElementById("movie")
//alert()
addBtn.addEventListener("click",function(){
    let inputValue=inputEl.value
    push(moviesInDB, inputValue)
})

console.log(app)