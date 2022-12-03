//burgerIcon using Classlist --JS starts
const hamburgerIcon = document.querySelector('#nav-toggle-button');
const navItems = document.querySelector('#nav-items');
hamburgerIcon.addEventListener('click', () => {
  navItems.classList.toggle('active');
});
//burgerIcon JS ends


//ProductGallery Carousel using 'Eventlistners', 'if-else' and 'for' loops--JS starts
let slidePosition = 0;
const slides = document.querySelectorAll('.carousel__item');
const totalSlides = slides.length;

document.
  querySelector('#carousel__button--next')
  .addEventListener("click", function() {
    moveToNextSlide();
  });
document.
  querySelector('#carousel__button--prev')
  .addEventListener("click", function() {
    moveToPrevSlide();
  });

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove('carousel__item--visible');
    slide.classList.add('carousel__item--hidden');
  }

  slides[slidePosition].classList.add('carousel__item--visible');
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  updateSlidePosition();
}
//ProductGallery Carousel JS ends



//Customizing CustomerForm Submit Button
const myButton = document.querySelector('#FormSubmit');
console.log(myButton);
myButton.style.backgroundColor = 'rgb(73, 70, 70)';
myButton.style.color = 'white';
myButton.style.fontSize = '15px';
myButton.style.padding= '10px';



//Adding Date-Of-Birth label and input type to the Customer details section in the form using InsertAdjacentHTML
const customerAddress = document.querySelector('#CustomerDetails')
console.log(customerAddress)
console.log(customerAddress.innerHTML)
customerAddress.insertAdjacentHTML('beforeend','<label for="DOB">Date of birth</label><br><input required type="date"id="DOB"><br>')



//Adding real-time Google maps using API--****not working as of now
function Map123() {  
  let mapOptions = {  
      center:new google.maps.LatLng(51.508742,-0.120850),  
      zoom: 10,  
      // mapTypeId: google.maps.MapTypeId.HYBRID  
  }  
  let map = new google.maps.Map(document.querySelector('#map'), mapOptions);  
  }  