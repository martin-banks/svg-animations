# Getting started

This site may be built with React, but the aim of these examples is to be able to create them without any library or framework.

### SVG structure

```html
<svg
  width="100"
  height="250"
  viewBox="0 0 100 250"
>
  <rect
    class="myRect"
    x="0"
    width="100"
    height="100"
  />
  <circle
    class="myCircle"
    cx="50"
    cy="200"
    r="50"
  />
</svg>
```

But what does this all mean?

`viewBox` Describes position and size of the svg; all sizes and positions of child elements are applied relative to these values. Typically with four values that represent x-coordinate, y-cordinate, width an height.

`cx` and `cy` Describe the central coordinates of a `circle` element for the x and y axis accordingly.

`r` Describes the radius of a circle element (radius is the distance from the center of a circle to the outer edge so the total width/height will be double the radius).

`class` This is a label that can be applied to elements to help target them; in this case to be able to apply custom styles on an item by item basis.


### CSS setup

```css
keyframes myAnimation {
  0% {
    transform:  translateX(0px);
  }
  100% {
    transform:  translateX(100px);
  }
}

.myCircle {
  animation: myAnimation 3s infinite;
}
```

What are we looking at? 

CSS keyframe animations work by declaring the animation with contains the different style attributes and their different values at different points on the timeline (the percentage values).

The animation is applied to an element by referencing it on the class name along with the duration and number of times it should run. 

Want more? [read the docs here](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations) or [a guide at W3Schools](https://www.w3schools.com/css/css3_animations.asp)


