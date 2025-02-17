var month = document.getElementById('month')
let count=0 
month.addEventListener('wheel',()=>{
count++
if(count%12 == 1){
month.textContent = 'Януари'
} else if (count%12 == 2) {
    month.textContent='Февруари'
} else if (count%12 == 3) {
    month.textContent ='Март'
} else if (count%12 == 4) {
    month.textContent ='Април'
} else if (count%12 == 5) {
    month.textContent ='Май'
} else if (count%12 == 6) {
    month.textContent ='Юни'
} else if (count%12 == 7) {
    month.textContent ='Юли'
} else if (count%12 == 8) {
    month.textContent ='Август'
} else if (count%12 == 9) {
    month.textContent ='Септември'
} else if (count%12 == 10) {
    month.textContent ='Октомври'
} else if (count%12 == 11) {
    month.textContent ='Ноември'
} else if (count%12 == 0) {
    month.textContent ='Декември'
}
}
)
month.addEventListener('click',()=>{
month.textContent=''
count=0
})
export{
    month
}