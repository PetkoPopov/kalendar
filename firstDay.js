var firstDay = document.getElementById('first-day')
var count=0 
firstDay.addEventListener('wheel',()=>{
     count++
     if(count >31){ count = 0}

        let c = "<strong>"+String(count)+"</strong>"
     firstDay.innerHTML = c

})

firstDay.addEventListener('click',()=>{
    count=0 
    firstDay.textContent= ''
})

export{
    firstDay,count
}