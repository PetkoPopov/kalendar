var day = document.getElementById('day')
let count = 0 
day.addEventListener('wheel',()=>{
count ++
if(count%7 == 1){
day.textContent = 'Понеделник'
} else if (count % 7 == 2) {
day.textContent='Вторник'
} else if (count % 7 == 3) {
day.textContent='Сряда'
} else if (count % 7 == 4) {
day.textContent= 'Четвъртък'
} else if (count % 7 == 5) {
day.textContent = 'Петък'
} else if (count % 7 == 6) {
day.textContent='Събота'
} else if (count % 7 == 0) {
day.textContent='Неделя'
}
})
day.addEventListener('click',()=>{
    count = 0 
    day.textContent ='' 
})
export{
    day
}