export default function contact() {
    "use strict";

    let contactForm = document.getElementById("contactForm"),
        inputsArr = contactForm.querySelectorAll('input');


    var validations = {
        required: function(value){
            return value !== '';
        },
        phone: function(value){
            return value.match(/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/);
        },
        email: function(value){
            return value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        }
    };
    function validate() {
            let errorMessage = document.querySelector("#formError p");

        contactForm.addEventListener('submit', function(e){
            var i = 0;
            while (i < inputsArr.length) {
                var attr = inputsArr[i].getAttribute('data-validation'),
                    rules = attr ? attr.split(' ') : '',
                    j = 0;
                console.log(rules);
                while (j < rules.length) {
                    if(!validations[rules[j]](inputsArr[i].value)) {
                        e.preventDefault();

                        errorMessage.parentElement.classList.remove("d-none");
                        errorMessage.innerHTML = "Invalid rule '" + rules[j] + "' for input '" + inputsArr[i].name + "'";
                        inputsArr[i].classList.add("border-danger");
                        return false;
                    }
                    errorMessage.parentElement.classList.add("d-none");
                    inputsArr[i].classList.remove("border-danger");
                    j++;
                }
                i++;
            }

        }, false)
    }
    validate();

}