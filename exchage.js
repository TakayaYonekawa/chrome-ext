document.addEventListener("DOMContentLoaded", function () {
  const amount = document.getElementById("amount");
  const currency = document.getElementById("currency");
  const convert = document.getElementById("convert");
  const result = document.getElementById("result");

  const API_KEY = "pKk17SJODEM6d3oaYNwNyQ==Qb1CozpZ65qf2ded";
  const apiUrl = `https://api.api-ninjas.com/v1/exchangerate?pair=USD_`;

  convert.addEventListener("click", () => {
    const amountTotal = amount.value;
    const currencyTotal = currency.value;
    const url = apiUrl + currencyTotal;

    fetch(url, {
      headers: {
        "X-API-KEY": API_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const rate = data.exchange_rate;
        const resultPrice = amountTotal * rate;
        return (result.innerHTML = `${amountTotal} USD = ${resultPrice.toFixed(
          2
        )} ${currencyTotal}`);
      })
      .catch((err) => {
        console.error("Result failed", err);
        result.innerHTML = "An error accurred please try again later";
      });
  });
});
