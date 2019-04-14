# Cube

While 3D transformations with svg are possible, there are two concepts missing; perspective and the ability to maintain transformations on child elements when the parent is also transformed

### Perspective
Pretty self explanitory; svg cannot calculate perspective when transformed meaning we can only achieve an isometric projection.

### Preserve-3d
When manipulating DOM elements it is possible not only to manipulate elements individually, but also it's child elements. 

Okay, but what does that mean? Consider the coloured cube above. It consists of a parent element acting as the whole 'cube' with six elements inside acting as the sides

```html
<div class="cube">
  <div class="side front"></div>
  <div class="side right"></div>
  <div class="side back"></div>
  <div class="side left"></div>
  <div class="side top"></div>
  <div class="side bottom"></div>
</div>
```

... and set up some basic for the size of the cube.

```css
.cube {
  position: relative;
  width: 300px;
  height: 300px;
}
.side {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px;
  background: rgba(0,0,0, 0.2);
  transform-origin: center;
}
```

We now have a stack of squares, all facing the same direction. Using 3D transforms each side can be moved and rotated into a cube layout

```css
.left {
  transform: translate3d(-100px, 0, 0) rotateY(90deg);
}
.right {
  transform: translate3d(100px, 0, 0) rotateY(90deg);
}
.front {
  transform: translate3d(0px, 0, 100px);
}
.back {
  transform: translate3d(0, 0, -100px);
}
.top {
  transform: translate3d(0, -100px, 0px) rotateX(90deg);
}
```

But wait, that's still a square?

This is where we need to apply some perspective> In CSS perspective is measure in pixels to describe the distance the observer is from a scene.

```css
body {
  perspective: 300px;
}
```

NOW we have a cube, let's start it spinning. Create an animation for the cube element to spin on the y-axis

```css
keyframes animation {
  0% { transform: rotateY(0deg) }
  100% { transform: rotateY(360deg) }
}
.cube {
  /* previous styles here */
  animation: animation 5s linear infinite
}
```

Something not right? Everything look like it's a flat picture of a cube spinning around?

This is because these transforms are not creating a 3D space, they are only emulating how they would display in 3D space. We have applied an animation to the cube element but it doens't know to update the side elements inside. This is where preserve-3d comes in


```css
.cube {
  /* previous styles here */
  transform-style: preserve-3d;
}
```

And that's about it! You should now have a rotating cube.

Play around, there's a lot more you can do animating the cube, why not try animating each of the sides, or ad something in side. 
