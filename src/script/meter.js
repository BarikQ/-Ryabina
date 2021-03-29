document.addEventListener("DOMContentLoaded", function (event) {
  let ratingAmount = parseInt(document.querySelector('#ratingValue').innerHTML);
  let meterArrow = document.querySelector('.meter-arrow');
  let angle = 0;
  const angleOffset = 90 + 18;
  const maxAngle = 180;
  const blocksAmount = 5;

  let block = 0;

  if (ratingAmount >= 300 && ratingAmount <= 400) {
    block = 1;
  }
  if (ratingAmount >= 401 && ratingAmount <= 500) {
    block = 2;
  }
  if (ratingAmount >= 501 && ratingAmount <= 600) {
    block = 3;
  }
  if (ratingAmount >= 601 && ratingAmount <= 700) {
    block = 4;
  }
  if (ratingAmount >= 701 && ratingAmount <= 850) {
    block = 5;
  }

  angle = block * maxAngle / blocksAmount - angleOffset;

  meterArrow.style.transform = `translate(-50%, 8px) rotate(${angle}deg)`;
});