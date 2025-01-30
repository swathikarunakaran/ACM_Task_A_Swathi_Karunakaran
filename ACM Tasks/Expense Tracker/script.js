let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

function addExpense() {
    const amount = parseFloat(document.getElementById('amount').value);
    const category = document.getElementById('category').value;
    const description = document.getElementById('description').value;

    if (amount > 0) {
        expenses.push({ amount, category, description });
        localStorage.setItem('expenses', JSON.stringify(expenses));
        updateTable();
        calculateTotal();
        clearForm();
    }
}

function updateTable() {
    const tableBody = document.getElementById('expenseTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    const filter = document.getElementById('filter').value;

    expenses.forEach(expense => {
        if (filter === 'all' || expense.category === filter) {
            const row = tableBody.insertRow();
            const amountCell = row.insertCell(0);
            const categoryCell = row.insertCell(1);
            const descriptionCell = row.insertCell(2);
            const actionCell = row.insertCell(3);

            amountCell.textContent = expense.amount;
            categoryCell.textContent = expense.category;
            descriptionCell.textContent = expense.description;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = () => deleteExpense(expense);
            actionCell.appendChild(deleteButton);
        }
    });
}

function deleteExpense(expense) {
    expenses = expenses.filter(e => e !== expense);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    updateTable();
    calculateTotal();
}

function calculateTotal() {
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    document.getElementById('total').textContent = total.toFixed(2);
}

function clearForm() {
    document.getElementById('amount').value = '';
    document.getElementById('description').value = '';
}

document.getElementById('filter').addEventListener('change', updateTable);

updateTable();
calculateTotal();
