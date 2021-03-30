document.addEventListener("DOMContentLoaded", function (event) {
  let ratingAmount = parseInt(document.querySelector('#ratingValue').innerHTML);
  let meterArrow = document.querySelector('.meter-arrow');
  let angle = 0;
  const angleOffset = 90 + 10;
  const maxAngle = 180;
  const blocksAmount = 5;
  const veryLowOffset = -77;
  const lowOffset = -42;
  const averageOffset = 0;
  const hightOffset = 42;
  const veryHightOffset = 77;

  if (ratingAmount >= 300 && ratingAmount <= 400) {
    angle = veryLowOffset;
  }
  if (ratingAmount >= 401 && ratingAmount <= 500) {
    angle = lowOffset;
  }
  if (ratingAmount >= 501 && ratingAmount <= 600) {
    angle = averageOffset;
  }
  if (ratingAmount >= 601 && ratingAmount <= 700) {
    angle = hightOffset;
  }
  if (ratingAmount >= 701 && ratingAmount <= 850) {
    angle = veryHightOffset;
  }

  // angle = block * maxAngle / blocksAmount - 90;
  // console.log(angle);

  meterArrow.style.transform = `translate(-50%, 0px) rotate(${angle}deg)`;
});