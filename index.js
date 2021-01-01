window.addEventListener("scroll", function() {
  var nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 200)
})


var q = 0;
var txt = 'We technology for the greater good.';
var speed = 50;
//document.getElementById("wec").innerHTML = " ";


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



































// particlesJS("particles-js", {"particles":{"number":{"value":100,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;





