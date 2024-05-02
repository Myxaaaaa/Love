// // Gallery Modal
// var modal = document.getElementById("myModal");
// var images = document.querySelectorAll(".gallery-item img");
// var modalImg = document.getElementById("img01");
// var currentIndex = 0;
// var maxIndex = 2;

// images.forEach(function(img, index) {
//   img.addEventListener("click", function() {
//     modal.style.display = "block";
//     modalImg.src = this.src;
//   });
// });

// function closeModal() {
//   modal.style.display = "none";
// }

// // Parallax effect
// window.addEventListener('scroll', function() {
//   var scrolled = window.pageYOffset;
//   var background = document.getElementById('video-background');
//   background.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
  
//   images.forEach(function(img) {
//     var yPos = -(scrolled * 0.2); // Adjust the speed of the parallax
//     img.style.transform = 'translateY(' + yPos + 'px)';
//   });
// });

// // Gallery Slider Swipe
// let isDown = false;
// let startX;
// let scrollLeft;

// document.getElementById('gallerySlider').addEventListener('mousedown', (e) => {
//   isDown = true;
//   startX = e.pageX - document.getElementById('gallerySlider').offsetLeft;
//   scrollLeft = document.getElementById('gallerySlider').scrollLeft;
// });
// document.getElementById('gallerySlider').addEventListener('mouseleave', () => {
//   isDown = false;
// });
// document.getElementById('gallerySlider').addEventListener('mouseup', () => {
//   isDown = false;
// });
// document.getElementById('gallerySlider').addEventListener('mousemove', (e) => {
//   if(!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - document.getElementById('gallerySlider').offsetLeft;
//   const walk = (x - startX) * 3; //scroll-fast
//   document.getElementById('gallerySlider').scrollLeft = scrollLeft - walk;
// });

// document.getElementById('gallerySlider').addEventListener('scroll', function() {
//   var gallery = document.getElementById('gallerySlider');
//   var scrolled = gallery.scrollLeft;
//   var width = gallery.clientWidth;
//   var scrollable = gallery.scrollWidth;

//   if (scrolled + width >= scrollable) {
//     loadMoreImages();
//   }
// });

// function loadMoreImages() {
//   maxIndex += 3;
//   images.forEach(function(img, index) {
//     if (index <= maxIndex) {
//       img.style.display = "block";
//     } else {
//       img.style.display = "none";
//     }
//   });
// }
