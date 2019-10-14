function renderTable(data) {
    let HTML = '';
    let balance = 0;
    const eur = '.00 Eur';

    data.sort((a, b) => a.month - b.month);

    for (let i = 0; i < data.length; i++){
        let item = data[i];
        


        if (item.income && item.expense) {
            balance = item.income - item.expense +eur;
            item.income = item.income+eur;
            item.expense = item.expense+eur;
        }
        if (!item.income) {
            balance = -item.expense +eur;
            item.income = '-';
            item.expense = item.expense+eur;
        }
        if (!item.expense) {
            balance = item.income +eur;
            item.income = item.income+eur;
            item.expense = '-';
        }

        HTML += `<div class="table-row">
                    <div class="cell">${i+1}</div>
                    <div class="cell">${months[item.month-1]}</div>
                    <div class="cell">${item.income}</div>
                    <div class="cell">${item.expense}</div>
                    <div class="cell">${balance}</div>
                </div>`;
    }
 
    return document.querySelector('.table-content').innerHTML = HTML;
}

// function renderMonths(data) {
//     let monthNum = document.querySelectorAll('.table-row .cell:nth-child(2)');

//     monthNum.forEach(item => {
//         item.innerHTML = data[item.innerHTML-1];
//     });

//     return;
// }

function sumIncome() {
    let income = document.querySelectorAll('.table-row .cell:nth-child(3)');
    let sum = 0;

    income.forEach(item => {
        item.innerHTML != '-' ? sum += parseInt(item.innerHTML) : sum += 0;
    });

    return document.querySelector('.table-footer .cell:nth-child(3)').innerHTML = sum+'.00 Eur';
}

function sumExpence() {
    let expence = document.querySelectorAll('.table-row .cell:nth-child(4)');
    let sum = 0;

    expence.forEach(item => {
        item.innerHTML != '-' ? sum += parseInt(item.innerHTML) : sum += 0;
    });

    return document.querySelector('.table-footer .cell:nth-child(4)').innerHTML = sum+'.00 Eur';
}

function sumBalance() {
    let balance = document.querySelectorAll('.table-row .cell:last-child');
    let sum = 0;

    balance.forEach(item => {
        sum += parseInt(item.innerHTML);
    });

    return document.querySelector('.table-footer .cell:last-child').innerHTML = sum+'.00 Eur';
}

function income() {
    let min,
        max,
        arr = [];
        income = document.querySelectorAll('.table-row .cell:nth-child(3)'),
        minIndex = null;
        maxIndex = null;
    
    income.forEach(item => {
        if (item.innerHTML != '-') {
            arr.push(parseInt(item.innerHTML));
        }
    });
    min = Math.min(...arr);
    max = Math.max(...arr);

    income.forEach((item, index) => {
        if (parseInt(item.innerHTML) == min) {
            minIndex = index;
        }
        if (parseInt(item.innerHTML) == max) {
            maxIndex = index;
        }
    });
    
    return document.querySelector('.summary-list .item:first-child .value').innerHTML = 
            document.querySelectorAll('.table-row .cell:nth-child(2)')[minIndex].innerHTML,
           document.querySelector('.summary-list .item:nth-child(2) .value').innerHTML = 
            document.querySelectorAll('.table-row .cell:nth-child(2)')[maxIndex].innerHTML;
}

function expence() {
    let min,
        max,
        arr = [];
        expence = document.querySelectorAll('.table-row .cell:nth-child(4)'),
        minIndex = null;
        maxIndex = null;
    
    expence.forEach(item => {
        if (item.innerHTML != '-') {
            arr.push(parseInt(item.innerHTML));
        }
    });
    min = Math.min(...arr);
    max = Math.max(...arr);

    expence.forEach((item, index) => {
        if (parseInt(item.innerHTML) == min) {
            minIndex = index;
        }
        if (parseInt(item.innerHTML) == max) {
            maxIndex = index;
        }
    });
    
    return document.querySelector('.summary-list .item:nth-child(3) .value').innerHTML = 
            document.querySelectorAll('.table-row .cell:nth-child(2)')[minIndex].innerHTML,
           document.querySelector('.summary-list .item:last-child .value').innerHTML = 
            document.querySelectorAll('.table-row .cell:nth-child(2)')[maxIndex].innerHTML;
}