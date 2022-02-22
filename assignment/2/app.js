const body = document.body;
const smallClass = "windowSmall";
const mediumClass = "windowMedium";
const LargeClass = "windowLarge";
windowSizeColor();

function windowSizeColor() {
  const inFrameWidth = window.innerWidth;
  if (inFrameWidth < 450) {
    body.classList.add(smallClass);
    body.classList.remove(mediumClass, LargeClass);
  } else if (inFrameWidth >= 450 && inFrameWidth < 750) {
    body.classList.remove(smallClass, LargeClass);
    body.classList.add(mediumClass);
  } else {
    body.classList.remove(mediumClass, smallClass);
    body.classList.add(LargeClass);
  }
}

window.addEventListener("resize", windowSizeColor);
