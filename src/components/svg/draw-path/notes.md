# Animate path

Animating a path drawing in uses a very simple trick; use a dashed line!

Using a dash space that is longer than the total path length then gradually reduce that space creates the illusion of the path drawing itself.


## How to guide

For this demo; create a simple circle

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 300 300"
>
  <circle
    class="circle"
    cx="150"
    cy="150"
    r="150"
  />
</svg>
```

Now set up a css animation

```css
@keyframes drawPath {
  0% {
    stroke-dashoffset: 1000;
    stroke: red;
  }
  100% {
    stroke-dashoffset: 0;
    stroke: gold;
  }
}
```

Then add that animation to your circle element

```css
.circle {
  fill: none;
  stroke-width: 10px;
  stroke-dasharray: 1000;
  animation: drawPath linear 5s infinite;
}
```
