function renderTable(data) {
    let HTML = '';

    for (let i = 0; i < data.length; i++){
        let item = data[i];

        HTML += `<div class="table-row">
                    <div class="cell">${i+1}</div>
                    <div class="cell">${item.month}</div>
                    <div class="cell">${item.income}.00 Eur</div>
                    <div class="cell">${item.expense}</div>
                    <div class="cell">${item.income - item.expense}.00 Eur</div>
                </div>`;
    }
 
    return document.querySelector('.table-content').innerHTML = HTML;
}

function renderMonths(data) {
    let monthNum = document.querySelectorAll('.table-row .cell:nth-child(2)');

    for (let i = 0; i < data.length; i++){
        monthNum.innerHTML = data[i];
        
        // console.log(monthNum[i].innerHTML);
    }
    

    return;
}