const carousel = document.getElementsByClassName('carousel-inner');
const carouselItems = document.getElementsByClassName('carousel-image');
const leftBtn = document.getElementById('left-carousel-button');
const rightBtn = document.getElementById('right-carousel-button');
const root = document.documentElement;
const rootStyle = getComputedStyle(root);
const transitionTiming = rootStyle.getPropertyValue('--transition-delay').slice(0, -1);

const items = [];
for(let i = 0; i < carouselItems.length; i++) {
  items.push(carouselItems[i]);
}
let imgWidth = items[0].clientWidth;

const carouselShiftLeft = function() {
  leftBtn.removeEventListener('click', carouselShiftLeft);
  rightBtn.removeEventListener('click', carouselShiftRight);

  items.forEach(item => {
    item.style.transform = `translateX(-${imgWidth}px)`;
  });
  let firstItem = items.shift();
  items.push(firstItem);
  setTimeout(() => {
    items.forEach(item => {
      item.style.setProperty('transition-duration', '0s');
      item.style.transform = `translateX(0px)`;
    });
    items.forEach((item, index) => {
      item.style.gridColumn = `${index + 1}`;
    });
    leftBtn.addEventListener('click', carouselShiftLeft);
    rightBtn.addEventListener('click', carouselShiftRight);
  }, (parseInt(transitionTiming) * 1000));
  items.forEach(item => {
    item.style.setProperty('transition-duration', `${transitionTiming}s`);
  });
}

const carouselShiftRight = function() {
  leftBtn.removeEventListener('click', carouselShiftLeft);
  rightBtn.removeEventListener('click', carouselShiftRight);

  items.forEach(item => {
    item.style.transform = `translateX(${imgWidth}px)`;
  });
  let lastItem = items.pop();
  items.unshift(lastItem);
  setTimeout(() => {
    items.forEach(item => {
      item.style.setProperty('transition-duration', '0s');
      item.style.transform = `translateX(0px)`;
    });
    items.forEach((item, index) => {
      item.style.gridColumn = `${index + 1}`;
    });
    leftBtn.addEventListener('click', carouselShiftLeft);
    rightBtn.addEventListener('click', carouselShiftRight);
  }, (parseInt(transitionTiming) * 1000));
  items.forEach(item => {
    item.style.setProperty('transition-duration', `${transitionTiming}s`);
  });
}

leftBtn.addEventListener('click', carouselShiftLeft);
rightBtn.addEventListener('click', carouselShiftRight);