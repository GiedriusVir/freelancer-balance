function renderTable(data) {
    let HTML = '';
    let balance = 0;
    for (let i = 0; i < data.length; i++){
        let item = data[i];

        if (item.income && item.expense) {
            balance = item.income - item.expense +'.00 Eur';
            item.income = item.income+'.00 Eur';
            item.expense = item.expense+'.00 Eur';
        }
        if (!item.income) {
            balance = -item.expense +'.00 Eur';
            item.income = '-';
            item.expense = item.expense+'.00 Eur';
        }
        if (!item.expense) {
            balance = item.income +'.00 Eur';
            item.income = item.income+'.00 Eur';
            item.expense = '-';
        }

        HTML += `<div class="table-row">
                    <div class="cell">${i+1}</div>
                    <div class="cell">${item.month}</div>
                    <div class="cell">${item.income}</div>
                    <div class="cell">${item.expense}</div>
                    <div class="cell">${balance}</div>
                </div>`;
    }
 
    return document.querySelector('.table-content').innerHTML = HTML;
}

function renderMonths(data) {
    let monthNum = document.querySelectorAll('.table-row .cell:nth-child(2)');

    monthNum.forEach(item => {
        item.innerHTML = data[item.innerHTML-1];
    });

    return;
}

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