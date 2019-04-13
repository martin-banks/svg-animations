# Rotating circles


---
## Sample SVG

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 300 300"
  width="300
>
  <circle class="circle-1" cx="150" cy="150" r="150" />
  <circle class="circle-2" cx="150" cy="150" r="140" />
  <circle class="circle-3" cx="150" cy="150" r="130" />

  <!-- Repeat for as many circles as you like... -->
  <!-- Each circle will need a unique class/id we can use to set the delay -->

</svg>
```

---
## Sample CSS

```css
@keyframes spinner {
  0% {
    transform: rotateY(0deg) rotateX(0deg);
  }
  100% {
    transform: rotateY(360deg) rotateX(360deg);
  }
}

circle {
  fill: none;
  backface-visibility: none;
  transform-origin: center;
  stroke: lightblue;
  stroke-width: 3px;
}

.circle-1 {
  animation: spinner 7s ease-in-out infinite alternate 3s;
}
.circle-2 {
  animation: spinner 7s ease-in-out infinite alternate 3.1s;
}
.circle-3 {
  animation: spinner 7s ease-in-out infinite alternate 3.2s;
}
/* Replicate for all of you other circles */

```
---
## That's a lot of repetiion...

Creating a few separate elements with their own class names is one thing, but what if you want to scale this to dozens or hundreds? Javascript to the rescue!

We can create a loop to create the individual elements and add to the parent svg element

Check out the [source code](https://github.com/martin-banks/svg-animations/blob/master/src/components/svg/rotating-circles/index.js) here to see how this solution
