(function () {

   // cache dom
   var body = document.body;
   var logo = document.querySelector('.loading-wrapper span');

   var revealSite = setTimeout(function() {

      logo.classList.remove('pulse-scale'); // remove the pulse-scale class
      logo.classList.add('vanish-out'); // add the vanish-out class
      body.classList.add('loaded'); // add the class loaded to the body

   }, 2000);


   window.onload = revealSite; // when the content is loaded, wait 2 seconds and trigger the revealing animation

})();
