let expenses = [];
let budget = 0;

function addExpense() {
    const name = document.getElementById("expense-name").value;
    const amount = parseFloat(document.getElementById("expense-amount").value);

    if (name === "" || isNaN(amount) || amount <= 0) {
        alert("Please enter valid expense details.");
        return;
    }

    expenses.push({ name, amount });
    updateUI();
}

function updateUI() {
    const expenseList = document.getElementById("expense-list");
    expenseList.innerHTML = "";

    expenses.forEach((expense, index) => {
        const li = document.createElement("li");
        li.textContent = `${expense.name}: $${expense.amount}`;
        expenseList.appendChild(li);
    });

    updateChart();
    checkBudget();
}

function setBudget() {
    budget = parseFloat(document.getElementById("budget-amount").value);
    if (isNaN(budget) || budget <= 0) {
        alert("Please enter a valid budget amount.");
        return;
    }
    document.getElementById("budget-status").textContent = `Budget set to: $${budget}`;
    checkBudget();
}

function checkBudget() {
    const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);
    if (budget > 0) {
        const remaining = budget - totalExpenses;
        document.getElementById("budget-status").textContent = `Remaining Budget: $${remaining}`;
    }
}
