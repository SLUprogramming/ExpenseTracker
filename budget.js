function suggestBudgetingTips() {
    const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);
    
    if (budget === 0) {
        document.getElementById("budget-tips").textContent = "Set a budget to start tracking!";
        return;
    }

    const remaining = budget - totalExpenses;
    
    if (remaining > budget * 0.5) {
        document.getElementById("budget-tips").textContent = "Great job! You're spending wisely.";
    } else if (remaining > budget * 0.2) {
        document.getElementById("budget-tips").textContent = "Be mindful of your spending, you're reaching your limit.";
    } else {
        document.getElementById("budget-tips").textContent = "You're close to exceeding your budget. Consider cutting unnecessary expenses!";
    }
}

// Call function after every update
setInterval(suggestBudgetingTips, 5000);
