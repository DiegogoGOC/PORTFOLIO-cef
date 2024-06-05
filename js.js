const modalContainer = document.querySelectorAll(".modal-container");
const modalTriggers = document.querySelectorAll(".modal-trigger");

/*modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal))*/

for (let i = 0; i < 10; i++) {
    if (i<3)modalTriggers[i].addEventListener("click", toggleModal0)
    else if (i<7)modalTriggers[i].addEventListener("click", toggleModal1)
    else modalTriggers[i].addEventListener("click", toggleModal2)
}

function toggleModal0(){
    modalContainer[0].classList.toggle("active")
}

function toggleModal1(){
modalContainer[1].classList.toggle("active")
}

function toggleModal2(){
    modalContainer[2].classList.toggle("active")
}