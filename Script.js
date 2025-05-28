// Toggle sidepanel
  function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }

  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}

function submitContact() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('submitMessage').value;

    if (name && email) {
        message.innerText = `Thank you, ${name}! Your message has been sent!`;
        message.style.color = 'green';
    } else {
        message.innerText = `Please fill in all fields.`;
        message.style.color = 'red';
    }
}

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
 window.onscroll = function() {scrollFunction()};

 function scrollFunction() {
   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("header").style.height = "120px";
      document.getElementById("navbar").style.padding = "10px";
      document.getElementById("navbar").style.marginTop = "-90px";
      document.getElementById("logo").style.fontSize = "16px";
   } else {

      document.getElementById("header").style.height = "130px";
      document.getElementById("navbar").style.padding = "30px";
      document.getElementById("navbar").style.marginTop = "-85px";
      document.getElementById("logo").style.fontSize = "32px";
   }
}
