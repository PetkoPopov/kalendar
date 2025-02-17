var showKalendar = document.getElementById('show-kalendar')
function getDate(){

    let d = new Date()
    showKalendar.textContent = d
    showKalendar.style.backgroundColor='yellow'

    return d
}
export{
    showKalendar,getDate
}

