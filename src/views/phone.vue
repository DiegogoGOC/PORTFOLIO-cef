<template>
<aside>
        <nav>
            <a href="tel:0781500885" target="_blank" title="numero telephonique : 07 81 50 08 85">
                <img src="./img/appel-telephonique.png" alt="">
            </a>
            <a href="mailto:ael.coic@gmail.com" target="_blank" title="email : ael.coic@gmail.com">
                <img src="./img/email.png" alt="">
            </a>
            <a href="https://www.google.com/maps/place/Douarnenez+Tr%C3%A9boul/@48.0957526,-4.3472889,17z/data=!3m1!4b1!4m6!3m5!1s0x4816d0be5a92ec21:0x344d3b1a4adb1d82!8m2!3d48.095749!4d-4.344714!16s%2Fg%2F11fm5lplhk?entry=ttu
            " target="_blank" title="adresse: 29100 DOUARNENEZ">
                <img src="./img/loc.png" alt="">
            </a>
        </nav>
    </aside> 
    <main>
      <h2>ENVOIE EMAIL</h2>
      <form id="form">
        <div class="field">
          <label for="subject">subject</label>
          <input type="text" name="subject" id="subject">
        </div>
        <div class="field">
          <label for="message">message</label>
          <input type="text" name="message" id="message">
        </div>
        <div class="field">
          <label for="sendername">nom</label>
          <input type="text" name="sendername" id="sendername">
        </div>
        <div class="field">
          <label for="replyto">repondre à</label>
          <input type="text" name="replyto" id="replyto">
        </div>
      
        <input type="submit" id="button" value="Send Email" >
      </form>
      
      
      <script type="text/javascript">
        emailjs.init('XYDe6NvsBI1TIwLBM')
      </script>
      
      <script type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
      
      <script type="text/javascript">
        emailjs.init('XYDe6NvsBI1TIwLBM')
      </script>
    </main>
</template>

<script setup>
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_krulmi6';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
    document.getElementById('form').reset();
});
</script>

<style scoped>
img {
    width: 100px;
}
form{
    text-align: left;
}
</style>
