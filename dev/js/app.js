(function () {

   // cache dom
   var body = document.body;
   var logo = document.querySelector('.loading-wrapper span');
   var title = document.querySelector('.setup__title'); // title
   var nextBtn = document.querySelector('.setup__next'); // next button
   var prevBtn = document.querySelector('.setup__previous'); // prev button
   var stepVisible = document.querySelector('.stepVisible'); // showing code element


   // Functions

   // 1- Load Animation
   // var revealSite = setTimeout(function() {
   //
   //    logo.classList.remove('pulse-scale'); // remove the pulse-scale class
   //    logo.classList.add('vanish-out'); // add the vanish-out class
   //    body.classList.add('loaded'); // add the class loaded to the body
   //
   // }, 2000);

   // 2- Update Title
   var updateTitle = function() {

      // Store the data attribute of the visible step, and set it as the title in the html
      var newTitle = stepVisible.getAttribute('data-title');
      title.innerHTML = newTitle;

   }

   // 3- Show the next step
   var showNextStep = function() {
      // When you click on the next button, remove the .showing class and add it to the next sibling element

      // .showing will trigger a fade-in animation

      // if there is no next sibling add the class of disabled to the button (pointer-events none blablabla)
   }

   // 4- Show the previous step
   var showPrevStep = function() {
      // When you click on the previous button, remove the .showing class and add it to the previous sibling element

      // .showing will trigger a fade-in animation

      // if there is no previous sibling add the class of disabled to the button (pointer-events none blablabla)
   }


   showNextStep();
   showPrevStep();
   updateTitle();

   // window.onload = revealSite; // when the content is loaded, wait 2 seconds and trigger the revealing animation

})();
