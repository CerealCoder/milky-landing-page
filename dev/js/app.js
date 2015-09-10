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

// By default, .showing is set to the first child
// When you click on the next button, remove the .showing class and add it to the next sibling element
// .showing will trigger a fade-in animation
// if there is no next sibling add the class of disabled to the button (pointer-events none blablabla)
// also the title of the step needs to change (set it as a data-title attribute)
