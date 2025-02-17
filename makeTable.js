import { count } from './firstDay.js'
import { month } from './month.js'
function makeTable() {
    console.log('in make table')

    var showKalendar = document.getElementById('show-kalendar')
    let tableErase = document.getElementsByTagName('table')[0]
    if (tableErase) {
        showKalendar.removeChild(tableErase)
    }
    var table = document.createElement('table')

    var thMonth = document.createElement('th')
    var trMonth = document.createElement('tr')
    thMonth.setAttribute('colspan', 7)
    thMonth.textContent = month.textContent
    trMonth.appendChild(thMonth)
    table.appendChild(trMonth)
    let trTh = document.createElement('tr')

    var colEmpty = document.createElement('col')
    colEmpty.setAttribute('span', 5)

    var colWikend = document.createElement('col')
    colWikend.setAttribute('span', 2)
    colWikend.setAttribute('style','background-color:lightgreen')
    table.appendChild(colEmpty)
    table.appendChild(colWikend)


    for (let d = 1; d <= 7; d++) {
        var th = document.createElement('th')

        if (d == 1) {
            th.textContent = 'Понеделник'
        } else if (d == 2) {
            th.textContent = 'Вторник'
        } else if (d == 3) {
            th.textContent = 'Сряда'
        } else if (d == 4) {
            th.textContent = 'Четвъртък'
        } else if (d == 5) {
            th.textContent = 'Петък'
        } else if (d == 6) {
            th.textContent = 'Събота'
        } else if (d == 7) {
            th.textContent = 'Неделя'
        }
        trTh.appendChild(th)
    }
    table.appendChild(trTh)
    for (let row = 1; row <= 2; row++) {
        let tr = document.createElement('tr')
        for (let d = 1; d <= 7; d++) {
            let td = document.createElement('td')
            td.textContent = row * d + count
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }

    showKalendar.appendChild(table)
    let clear = document.getElementById('clear')
    clear.style.display = 'none'
}

export {
    makeTable
}

