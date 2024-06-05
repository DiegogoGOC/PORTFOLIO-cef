<template>
  <div>
   <div class="modal-container">
              
    <div class="overlay modal-trigger"></div>
                              
      <div class="modal">
        <button class="close-modal modal-trigger">X</button>
        <h1>google map bis </h1>
        <p>LanguAge: scala <br/>(travaille de groupe)</p>
      </div>
    </div>
                              
    <button class="modal-btn modal-trigger">Open</button>
  </div>
</template>

<script setup>
  const modalContainer = document.querySelectorAll(".modal-container");
  const modalTriggers = document.querySelectorAll(".modal-trigger");

  modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal))

  /*for (let i = 0; i < 10; i++) {
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
  }*/
</script>

<style scoped>
  .modal-btn{
    padding: 10px 14px;
    font-size: 18px;
    margin: 10px auto;
    display: block;
    min-width: 150px;
    cursor: pointer;
  }
  
  .modal-container {
    visibility: hidden;
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    color:black;
  }
  
  .modal-container.active {
    visibility: visible;
    
  }
  
  /*.overlay{
    direction: center;
    position: absolute;
    width: 100%;
    height: 100%;
    background:#333333d3;
  }*/
  
  .modal {
    width: 95%;
    max-width: 500px;
    min-width: 300px;
    padding: 30px;
    background: #fff;
    border-radius: 5px;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  
  }
  
  .close-modal {
    padding: 8px 10px;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    background: #ff365e ;
    color: #fff;
  }
</style>
