// This is a bit of a new thing. registerOnclick is a function provided by the
// framework. But the argument we're passing to it is *another* function. Notice
// how the argument here looks like what we normally put on the righthand side
// of the equals sign in our normal `const foo = ...` function definition. This
// is called an anonymous function. We'll discuss this in more detail in a few
// weeks but for now you can just adapt this code.

//registerOnclick((x, y) => {
//  drawText('X', x, y, 'black', Math.min(width, height) * 0.3);
//});

for (let i = 1; i <= 3; i++) {
  drawLine(i * width / 3, 0, i * width / 3, height, 'black', 1)
  drawLine(0, i * height / 3, width, i * height / 3, 'black', 1)
}

let i = 0
registerOnclick((x, y) => {
  if (i % 2 == 0) {
  drawText('X', x, y, 'black', Math.min(width, height) * 0.3);
  i++
  } else {
    drawText('0', x, y, 'black', Math.min(width, height) * 0.3);
    i++
  }
  
});
