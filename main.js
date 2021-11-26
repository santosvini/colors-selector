function changeColor() {
  const red = document.getElementById('red').value
  const green = document.getElementById('green').value
  const blue = document.getElementById('blue').value

  document.getElementById('rgb').value = "(" + red + "," + green + "," + blue + ")"

  document.body.style.background = "rgb(" + red + "," + green + "," + blue + ")"
}

changeColor()