const calcButton = document.getElementById('calcButton');
const calcForm = document.getElementById('calcForm');
const errorMsg = document.getElementById('errorMsg');
const answer = document.getElementById('answer');

calcButton.addEventListener('click', function(event){
    event.preventDefault();
    onSubmit();
});

const onSubmit = () => {
    const calculation = calcForm.value.trim();
    let calculationSplit;
    let formData = "";
    let regCalc = new RegExp(/^(\d+[-+/*]\d+)$/);
    errorMsg.innerText = "";

    if (!regCalc.test(calculation)) {
        errorMsg.innerText = "Invalid Input. Try again."
        answer.innerHTML = '';
    } else if (calculation.includes("+")) {
        calculationSplit = calculation.split("+")
        formData = `/math/add/${calculationSplit[0]}/${calculationSplit[1]}`
        mathCall(formData);
    } else if (calculation.includes("-")) {
        calculationSplit = calculation.split("-")
        formData = `/math/subtract/${calculationSplit[0]}/${calculationSplit[1]}`
        mathCall(formData);
    } else if (calculation.includes("*")) {
        calculationSplit = calculation.split("*")
        formData = `/math/multiple/${calculationSplit[0]}/${calculationSplit[1]}`
        mathCall(formData);
    } else if (calculation.includes("/")) {
        calculationSplit = calculation.split("/")
        formData = `/math/divide/${calculationSplit[0]}/${calculationSplit[1]}`
        mathCall(formData);
    }
};

const mathCall = (URI) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", URI);
    xhr.send();
    xhr.onload = function() {
        let response = JSON.parse(xhr.response);
        answer.innerHTML = `Answer is: <span id="answer">${response.result}</span>`;
        console.log(response.result);
    }
}