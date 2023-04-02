# Process Notes - Single-page design portfolio solution

A useful practice I've found is to be deliberate and methodical when it comes to a new project, especially during initial set up. Starting with this project I will be documenting my process as I go through it, making notes, identifying areas where I need to learn & experiment, and anything else I might encounter.

## Table of contents

- [First Steps](#first-steps)
  - [Initial Setup](#initial-setup)
  - [Design System](#design-system)
- [Building](#building)
  - [HTML](#html)
  - [CSS](#css)
  - [JS](#js)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## First Steps

### Initial Setup

The very first thing I do is download all the files I need, create files that I don't have, and set up the directory structure. Here's my typical setup for a very simple one-page project (a local file server is only used out of convenience, not necessity):

```css
.
└── parent directory/
    ├── index.html
    ├── app.js
    ├── README.md
    ├── NOTES.md
    ├── .gitignore
    └── resources/
        ├── css/
        │   ├── reset.css
        │   └── index.css
        ├── images/
        │   └── favicon.png
        └── js/
            └── index.js

```

The Frontend Mentor projects provide a basic index.html page to start, but if I was starting from scratch, that would be a step included here. I use VSCode and it's just a few keystrokes to get a file in the directory.

*This one is important!* I test all the links between files making sure that:
- app.js is serving the file locally (if I'm using a file server)
- index.css is linked by changing the background color
- index.js is linked by popping up an alert

This can prevent a headache down the road when something doesn't appear to be working but it's just a file not linked correctly.

### Design System

This could also be where I go through the design files, make notes, plan for how I want to accomplish something...but I find that the work of setting up the design system is quite satisfying before I begin thinking about (potentially) harder problems.

The design system will include the following:
- document font size, weight, family
- colors, including creating any custom variables
- headers
- buttons

It could also include:
- anchors
- hover states
- visibility or display states

I like using rems, at least right now, and something that I'll check out is how all the various font sizes relate, along with line-heights, so that I can select a base font size that's easiest to work with in rem terms.

Finally, once the design system is in place, I'll test out the various elements in the browser.

## Building

### HTML

I focused on identifying in advance the natural sections and breaks in the page. I wanted to build-in semantic structure and accessibility from the beginning.

### CSS

I decided to use a grid layout for most of the main section. For desktop I'll set up a 6 column grid that shrinks to 4 column for tablet, and 2 column for mobile. Ideally I can set this up so I won't have to do anything more than make minor adjustments to the grid children--hoping they can flow naturally when the grid shrinks at breakpoints.

That's my primary goal at least.

Update: I would call it a success! I'm now feeling disappointed I haven't tried to implement grid more often. Here's my 6-column setup:

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1.5rem;
  margin-bottom: 5.5rem;
}
.grid-container div:first-child {
  grid-column: span 2;
  grid-row: span 2;
}
.grid-container div:nth-child(n+4) {
  grid-column: span 2;
}
.grid-container div:nth-last-child(-n+2) {
  grid-column: span 3;
  margin-top: 7rem;
}
.grid-container div:nth-child(5) {
  grid-column: 5 / span 2;
  grid-row: 1;
}
.grid-container div:nth-child(1) {
  background-color: var(--violet);
}
.grid-container div:nth-child(2) {
  background-color: var(--yellow);
}
.grid-container div:nth-child(3) {
  background-color: var(--pink);
}
.grid-container div:nth-child(4) {
  background-color: var(--salmon);
}
.grid-container div:nth-child(5) {
  background-color: var(--cyan);
}
.grid-container div:nth-child(6) {
  background-color: var(--maroon);
}
```

I thought about feeding the colors in via JS, stored in an array, but realized that would probably make things *less* clear so I opted for the more verbose selecting of each child.

### JS

I have never done a carousel before, and this one had it's own unique challenges, including:
- a centered element
- other elements shown partially on/off the sides of the viewport
- infinite slide (I added this for my own enjoyment)

I didn't like very much the flexbox examples I saw, because I wanted control over the children, but grid had it's own downsides. What I settled on was:
- grid with one row, 5 equal columns, image elements in each grid cell
- translateX with transition timing for the slide
- transition duration stored in a custom variable for easy access and update
- on slide conclusion, all cells are simultaneously snapped back but re-arranged in the grid to match the results of the slide--essentially it just looks like the forward grid item pops to the other side after the slide

Some essentials of the JS
```js
// items is an array of the grid children
items.forEach(item => {
    item.style.transform = `translateX(${direction * imgWidth}px)`;
  });
  // This is for a left slide, the right slide would do the opposite
  let firstItem = items.shift();
  items.push(firstItem);

  // This part happens in a timeout after delay to allow the slide
  items.forEach((item, index) => {
      item.style.gridColumn = `${index + 1}`;
    });
```

I would like to build something more dynamic to adapt to any number of items in the grid but I don't know yet whether I'll do that for this project.

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
