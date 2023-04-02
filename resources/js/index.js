// Get the elements necessary to run the carousel
const carouselItems = document.getElementsByClassName('carousel-image');
const leftBtn = document.getElementById('left-carousel-button');
const rightBtn = document.getElementById('right-carousel-button');
// Capture the transition time from the CSS file (custom variable)
const root = document.documentElement;
const rootStyle = getComputedStyle(root);
const transitionTiming = rootStyle.getPropertyValue('--transition-delay').slice(0, -1);

// Load the carousel items into an arry
const items = [];
for(let i = 0; i < carouselItems.length; i++) {
  items.push(carouselItems[i]);
}
// Capture the width of a carousel item for the shift
let imgWidth = items[0].clientWidth;

// After the slide, this function processes an instant shift back
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
    leftBtn.addEventListener('click', carouselShiftLeft);
    rightBtn.addEventListener('click', carouselShiftRight);
  }, (parseFloat(transitionTiming) * 1000));
  items.forEach(item => {
    item.style.setProperty('transition-duration', `${transitionTiming}s`);
  });
}

// Slides the carousel left and changes item array order to match
const carouselShiftLeft = function() {
  leftBtn.removeEventListener('click', carouselShiftLeft);
  rightBtn.removeEventListener('click', carouselShiftRight);

  items.forEach(item => {
    item.style.transform = `translateX(-${imgWidth}px)`;
  });
  let firstItem = items.shift();
  items.push(firstItem);

  gridItemShift();
}

// Slides the carousel right and changes item array order to match
const carouselShiftRight = function() {
  leftBtn.removeEventListener('click', carouselShiftLeft);
  rightBtn.removeEventListener('click', carouselShiftRight);

  items.forEach(item => {
    item.style.transform = `translateX(${imgWidth}px)`;
  });
  let lastItem = items.pop();
  items.unshift(lastItem);

  gridItemShift();
}

leftBtn.addEventListener('click', carouselShiftLeft);
rightBtn.addEventListener('click', carouselShiftRight);