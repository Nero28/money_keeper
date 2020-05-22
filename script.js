const money = prompt('Ваш бюджет на месяц?', '');
const time = prompt('Введите дату в формате YYYY-MM-DD');


const appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
}

const obligatoryExpensesThisMonth1 = prompt('Введите обязательную статью расходов в этом месяце', '');
const howMuch2 = prompt('Во сколько обойдется?', '');
const obligatoryExpensesThisMonth3 = prompt('Введите обязательную статью расходов в этом месяце', '');
const howMuch4 = prompt('Во сколько обойдется?', '');

appData.expenses[obligatoryExpensesThisMonth1] = howMuch2;
appData.expenses[obligatoryExpensesThisMonth3] = howMuch4;


alert(appData.budjet / 30);




