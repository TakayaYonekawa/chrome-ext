const amount = document.getElementById('amount');
const currency = document.getElementById('currency');
const convert = document.getElementById('convert');
const result = document.getElementById('result');


const API_KEY = ""
const apiUrl = ""


convert.addEventListener('click', () => {
    const amountTotal = amount.value;
    const currencyTotal = currency.value;
    const url = apiUrl + currencyTotal;

    fetch(url, {
        headers: {
            'X-API-KEY': API_KEY
        }
    })
    .then(res => res.json())
    .then(data => {
        const rate =data.rate;
        const result = amountTotal * rate;
        result.innerHTML = `${amount} ${currency} = ${result.toFixed(2)} USD`;
    })
    .catch(err => {
        console.error('Result failed', error);
        result.innerHTML = 'An error accurred please try again later'
    })
})