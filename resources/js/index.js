const carousel = document.getElementsByClassName('carousel-inner');
const carouselItems = document.getElementsByClassName('carousel-image');
const leftBtn = document.getElementById('left-carousel-button');
const rightBtn = document.getElementById('right-carousel-button');

const items = [];
for(let i = 0; i < carouselItems.length; i++) {
  items.push(carouselItems[i]);
}
// let imgWidth = items[0].clientWidth;

leftBtn.addEventListener('click', () => {
  let firstItem = items.shift();
  items.push(firstItem);
  items.forEach((item, index) => {
    item.style.gridColumn = `${index + 1}`;
  });
});

rightBtn.addEventListener('click', () => {
  let lastItem = items.pop();
  items.unshift(lastItem);
  items.forEach((item, index) => {
    item.style.gridColumn = `${index + 1}`;
  });
});