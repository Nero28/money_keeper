let start = document.getElementById('start'),
    result = document.querySelectorAll('.result .result-table'),
    budget = document.querySelectorAll('.budget-value'),
    daybudget = document.querySelectorAll('.daybudget-value'),
    level = document.querySelectorAll('.level-value'),
    expenses = document.querySelectorAll('.expenses-value'),
    optionalexpenses = document.querySelectorAll('.optionalexpenses-value'),
    income = document.querySelectorAll('.income-value'),
    monthsavings = document.querySelectorAll('.monthsavings-value'),
    yearsavings = document.querySelectorAll('.yearsavings-value'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value'),
    expensesItem = document.getElementsByClassName('expenses-item'),
    btn = document.getElementsByTagName('button'),
    optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    savingsCheckbox = document.querySelector('.checksavings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent');



let expensesItemBtn = btn[0],
    optionalexpensesBtn = btn[1],
    countBudgetBtn = btn[2];


    