# Process Notes - Single-page design portfolio solution

A useful practice I've found is to be deliberate and methodical when it comes to a new project, especially during initial set up. Starting with this project I will be documenting my process as I go through it, making notes, identifying areas where I need to learn & experiment, and anything else I might encounter.

## Table of contents

- [Overview](#overview)
  - [Initial Setup](#initial-setup)
  - [Design System](#design-system)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

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

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```
```css
.proud-of-this-css {
  color: papayawhip;
}
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

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
