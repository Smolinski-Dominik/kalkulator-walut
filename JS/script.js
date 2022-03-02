{


    const calculateResult = (sum, currency) => {

        const rateEUR = 4.40;
        const rateUSD = 3.50;
        const rateCHF = 4.70;
        const rateGBP = 5.50;

        switch (currency) {
            case "EUR":
                return sum / rateEUR

            case "USD":
                return sum / rateUSD

            case "CHF":
                return sum / rateCHF

            case "GBP":
                return sum / rateGBP

        }
    }
    const onFormSubmit = (event) => {
        event.preventDefault();

        const sumElement = document.querySelector(".js-sum");
        const resultElement = document.querySelector(".js-result");
        const currencyElement = document.querySelector(".js-currency");

        const sum = +sumElement.value;
        const currency = currencyElement.value;

        let result = calculateResult(sum, currency);

        resultElement.innerText = `${sum.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
    }
    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);

    }
    init();
}