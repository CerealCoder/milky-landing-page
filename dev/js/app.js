(function () {

   // cache dom
   var body = document.body;
   var logo = document.querySelector('.loading-wrapper span');
   var title = document.querySelector('.setup__title'); // title
   var nextBtn = document.querySelector('.setup__next'); // next button
   var prevBtn = document.querySelector('.setup__previous'); // prev button
   var codeEditor = document.querySelector('.setup__code');
   var firstStep = codeEditor.firstElementChild;
   var lastStep = codeEditor.lastElementChild;
   var visibleStep;
   var currentStep = visibleStep;

   // Functions

   // 1- Load Animation
   // var revealSite = setTimeout(function() {
   //
   //    logo.classList.remove('pulse-scale'); // remove the pulse-scale class
   //    logo.classList.add('vanish-out'); // add the vanish-out class
   //    body.classList.add('loaded'); // add the class loaded to the body
   //
   // }, 2000);

   // 2 - Load first step
   function loadFirstStep() {


      // Give it the class of stepVisible
      firstStep.classList.add('visible');
      // update the output
      updateTitle();

   };

   // 3- Update Title
   function updateTitle() {

      visibleStep = document.querySelector('.visible');

      // Select the data attribute of the visible step
      var newTitle = visibleStep.getAttribute('data-title');

      // set it as the output of the title
      title.innerHTML = newTitle;
      title.classList.add('fade-in-scale-bounce');
   };

   // 4- Show the next step
   function showNextStep() {

      prevBtn.disabled = false;

      visibleStep = document.querySelector('.visible');
      currentStep = visibleStep;

      // select the next element
      var nextStep = currentStep.nextElementSibling;

      // remove the class of visible on the current Slide
      currentStep.classList.remove('visible');

      // Add it to the next element in the list and make it fade in
      nextStep.classList.add('visible', 'fade-in-left');

      if (nextStep == lastStep) {
         nextBtn.disabled = true;
      }

      updateTitle();

   };

   // 5- Show the previous step
   function showPrevStep() {

      nextBtn.disabled = false;

      visibleStep = document.querySelector('.visible');
      currentStep = visibleStep;

      // select the next element
      var prevStep = currentStep.previousElementSibling;

      // remove the class of visible on the current Slide
      currentStep.classList.remove('visible');

      // Add it to the next element in the list and make it fade in
      prevStep.classList.add('visible', 'fade-in-left');

      if (prevStep == firstStep) {
         prevBtn.disabled = true;
      }

      updateTitle();

   };


   // 6 - Initialize the app
   function init() {

      // window.onload = revealSite();// when the content is loaded, wait 2 seconds and trigger the revealing animation
      loadFirstStep();
      nextBtn.addEventListener('click', showNextStep, false);
      prevBtn.addEventListener('click', showPrevStep, false);

   };

   init();


})();






   // // **** TESTIMONIAL CAROUSEL **** //
   //
   //  // add the class visible to the first slide
   //  var firstSlide = $('.testimonials-list .quote').first();
   //  var lastSlide = $('.testimonials-list .quote').last();
   //
   //  // add the class visible to the first slide
   //  firstSlide.addClass('visible');
   //
   //
   //  var prevBtn = $('button.prev-slide');
   //  var nextBtn = $('button.next-slide');
   //
   //
   //
   //
   //  // When the next button is clicked remove the class visible from the current slide and pass it to the next
   //
   //
   //  nextBtn.on('click', function(){
   //
   //    var currentSlide = $('.visible');
   //    var nextSlide = currentSlide.next();
   //    var slideFirst = $('.quote').first();
   //
   //    if (nextSlide.length === 0) {
   //
   //        nextSlide = firstSlide;
   //
   //    }
   //
   //    currentSlide.removeClass('visible');
   //    nextSlide.addClass('visible fade-in');
   //
   //  });
   //
   //  // When the previous button is clicked remove the class visible from the current slide and pass it on to the previous one
   //
   //  prevBtn.on('click', function(){
   //
   //    var currentSlide = $('.visible');
   //    var prevSlide = currentSlide.prev();
   //    var slideFirst = $('.quote').first();
   //
   //    if (prevSlide.length === 0) {
   //
   //        prevSlide = lastSlide;
   //
   //    }
   //
   //    currentSlide.removeClass('visible');
   //    prevSlide.addClass('visible fade-in');
   //
   //  });
