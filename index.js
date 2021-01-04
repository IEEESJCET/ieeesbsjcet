window.addEventListener("scroll", function() {
  var nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 100)
})


var q = 0;
var txt = 'We technology for the greater good.';
var speed = 50;


function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }


function typeWriter() {

  if (q < txt.length)
  {
        

        if(document.getElementById("wec").innerText == "We")
        {
            document.getElementById("wec").innerHTML = 'We <span class="bg-white-txt">c</span>';

            


            document.getElementById("wec").innerHTML = 'We <span class="bg-white-txt">cr</span>';

            


            document.getElementById("wec").innerHTML = 'We <span class="bg-white-txt">cre</span>';

            


            document.getElementById("wec").innerHTML = 'We <span class="bg-white-txt">crea</span>';

            


            document.getElementById("wec").innerHTML = 'We <span class="bg-white-txt">creat</span>';

            


            document.getElementById("wec").innerHTML = 'We <span class="bg-white-txt">create</span>';

           
        }

        if(document.getElementById("wec").innerText == "We create technology")
        {
            document.getElementById("wec").innerHTML += " ";
            document.getElementById("wec").innerHTML += "<br>";
        }

        document.getElementById("wec").innerHTML += txt.charAt(q);
        q++;
        setTimeout(typeWriter, speed);
        
  }
  

}
typeWriter();
























