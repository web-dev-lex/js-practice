

const salary_element = document.getElementsByClassName('salary');
const needs_element = document.getElementsByClassName('needs');
const wants_element = document.getElementsByClassName('wants');
const savings_element = document.getElementsByClassName('savings');


function calculate_budget(salary) {
    const needs = salary / 2;
    const wants = salary / 1 / 3;
    const savings = salary / 5;
    
    needs_element.innerHTML = `Use ${needs} for necessities`;
    wants_element.innerHTML = `Use ${wants} for wants`;
    savings_element.innerHTML = `Use ${savings} for savings/investing`;
}

function reset() {
    salary_element.value = "";
    needs_element.value = "";
    wants_element.value = "";
    savings_element.value = "";
}