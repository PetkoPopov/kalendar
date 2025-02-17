import { makeTable } from "./makeTable.js"

let btnCreate = document.getElementById('button')
btnCreate.addEventListener('click',()=>{

    makeTable()
})
export{
    btnCreate
}