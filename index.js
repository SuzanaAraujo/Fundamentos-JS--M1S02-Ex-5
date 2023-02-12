var mesAtual = 'janeiro';
var entradas = 8000;
var saidas = 400;
var saldo = 1000;
var alimentacao = { description: 'Alimentação', value: 800 };
var salario = { description: 'Salário', value: 2000 };

var expensesList = [
  'mercado',
  'academia',
  'internet',
  'ração dos dogs',
  'gasolina',
];

// Mês
document.getElementById('month').innerHTML = mesAtual;

// Entradas
document.getElementById('total-earnings').innerHTML = entradas;

// Saídas
document.getElementById('total-expenses').innerHTML = saidas;

// Saldo
document.getElementById('final-balance').innerHTML = saldo;

// Minha receita: Salário
document.getElementById(
  'salary'
).innerHTML = `${salario.description}:R$ ${salario.value}`;

// Meus gastos: Lista de gastos
document.getElementById('expenses-list').innerHTML = expensesList;
