let sumElement = document.querySelector(".js-sum");
let resultElement = document.querySelector(".js-result");
let currencyElement = document.querySelector(".js-currency");
let formElement = document.querySelector(".js-form");

let rateEUR = 4.40;
let rateUSD = 3.50;
let rateCHF = 4.70;
let rateGBP = 5.50;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let sum = +sumElement.value;
    let currency = currencyElement.value;

    let result;
    switch (currency) {
        case "EUR":
            result = sum / rateEUR
            break;
        case "USD":
            result = sum / rateUSD
            break;
        case "CHF":
            result = sum / rateCHF
            break;
        case "GBP":
            result = sum / rateGBP
            break;
    }
    resultElement.innerText = `${sum.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
})