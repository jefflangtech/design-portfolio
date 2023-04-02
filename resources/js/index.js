// Get the elements necessary to run the carousel
const carouselItems = document.getElementsByClassName('carousel-image');
const leftBtn = document.getElementById('left-carousel-button');
const rightBtn = document.getElementById('right-carousel-button');
// Capture the transition time from the CSS file (custom variable)
const root = document.documentElement;
const rootStyle = getComputedStyle(root);
const transitionTiming = rootStyle.getPropertyValue('--transition-delay').slice(0, -1);
// Control variables for the event listener callback functions
const left = -1;
const right = 1;
let isMoving = false;

// Load the carousel items into an array
const items = [];
for(let i = 0; i < carouselItems.length; i++) {
  items.push(carouselItems[i]);
}

// After the slide, this function processes an instant snap back
// and a re-organization of the grid items so as to be in the place
// of the items after the slide
const gridItemShift = function() {
  setTimeout(() => {
    items.forEach(item => {
      item.style.setProperty('transition-duration', '0s');
      item.style.transform = `translateX(0px)`;
    });
    // Reorganizes the grid items based on their array index
    items.forEach((item, index) => {
      item.style.gridColumn = `${index + 1}`;
    });
    isMoving = false;
  }, (parseFloat(transitionTiming) * 1000));
    items.forEach(item => {
    item.style.setProperty('transition-duration', `${transitionTiming}s`);
  });
}

const carouselShift = function(direction) {
  // Flag to ignore additional clicks while carousel is moving
  if(isMoving) {
    return;
  }
  isMoving = true;

  // Capture the width of a carousel item for the slide
  let imgWidth = items[0].clientWidth;

  items.forEach(item => {
    item.style.transform = `translateX(${direction * imgWidth}px)`;
  });

  // Re-order array depending on direction of slide, so grid arrangement
  // can be matched
  if(direction > 0) {
    let lastItem = items.pop();
    items.unshift(lastItem);
  } else {
    let firstItem = items.shift();
    items.push(firstItem);
  }

  gridItemShift();

}

leftBtn.addEventListener('click', () =>{
  carouselShift(left);
});
rightBtn.addEventListener('click', () =>{
  carouselShift(right);
});