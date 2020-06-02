export default function contact() {
    "use strict";

    const contactForm = document.getElementById("contactForm");
    let inputsArr = contactForm.querySelectorAll('input');
    let errorMessage = document.querySelector("#formError p");

    let validations = {
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

    let validate = function() {

        contactForm.addEventListener('submit', function(e){
            let i = 0;
            while (i < inputsArr.length) {
                let attr = inputsArr[i].getAttribute('data-validation');
                let rules = attr ? attr.split(' ') : '';
                let x = 0;
                console.log(rules);
                while (x < rules.length) {
                    if(!validations[rules[x]](inputsArr[i].value)) {
                        e.preventDefault();

                        errorMessage.parentElement.classList.remove("d-none");
                        errorMessage.innerHTML = `Field ${inputsArr[i].name} is invalid.`;
                        inputsArr[i].classList.add("border-danger");
                        return false;
                    }
                    errorMessage.parentElement.classList.add("d-none");
                    inputsArr[i].classList.remove("border-danger");
                    x++;
                }
                i++;
            }
            contactForm.action = "https://formspree.io/jasonpcrowther@gmail.com";
        }, false)
    };

    validate();

}