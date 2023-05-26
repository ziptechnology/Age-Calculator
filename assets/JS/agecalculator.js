function calculator() {
    var agethingo = document.querySelector('#agethingo')
    var agething = document.querySelector('#agething')
    agething.innerText = agethingo.value
}

var element = document.querySelector('#button-addon2'); // grab a reference to your element
element.addEventListener('click', calculator);