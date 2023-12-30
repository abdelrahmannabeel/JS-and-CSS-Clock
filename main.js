function setDate() {
  const secondHand = document.querySelector(".second-hand");
  const minutesHand = document.querySelector(".min-hand");
  const hoursHand = document.querySelector(".hour-hand");

  const now = new Date();
  const seconds = degrees(now.getSeconds());
  const minutes = degrees(now.getMinutes());
  const hours = degrees(now.getHours());

  secondHand.style.transform = `rotate(${seconds}deg)`;
  minutesHand.style.transform = `rotate(${minutes}deg)`;
  hoursHand.style.transform = `rotate(${hours}deg)`;
  function degrees(n) {
    //   return (n * 360) / 60 + 180;
    return (n / 60) * 360 + 90;
  }
  console.log(seconds);
}

setInterval(setDate, 1000);
