let expenseChart;

function updateChart() {
    const ctx = document.getElementById("expenseChart").getContext("2d");

    if (expenseChart) {
        expenseChart.destroy();
    }

    const labels = expenses.map(exp => exp.name);
    const data = expenses.map(exp => exp.amount);

    expenseChart = new Chart(ctx, {
        type: "doughnut",
        data: {
            labels: labels,
            datasets: [{
                label: "Expenses",
                data: data,
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50", "#FF9800"],
            }]
        }
    });
}
