let display = document.getElementById("display");
let countDown = 10;
let message = "Happy Independence Day";
setTimeout(() => {
  display.innerText = countDown;
  countDown--;
  setTimeout(() => {
    display.innerText = countDown;
    countDown--;
    setTimeout(() => {
      display.innerText = countDown;
      countDown--;
      setTimeout(() => {
        display.innerText = countDown;
        countDown--;
        setTimeout(() => {
          display.innerText = countDown;
          countDown--;
          setTimeout(() => {
            display.innerText = countDown;
            countDown--;
            setTimeout(() => {
              display.innerText = countDown;
              countDown--;
              setTimeout(() => {
                display.innerText = countDown;
                countDown--;
                setTimeout(() => {
                  display.innerText = countDown;
                  countDown--;
                  setTimeout(() => {
                    display.innerText = countDown;
                    countDown--;
                    setTimeout(() => {
                      display.innerText = message;
                      if (display.innerText == "Happy Independence Day") {
                        display.classList.add("zoom");
                      }
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);