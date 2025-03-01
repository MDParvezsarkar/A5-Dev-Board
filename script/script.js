document.getElementById("blog-page").addEventListener("click", function() {
    window.location.href = "../blog.html";
});
// completed button task
let clickedButtonsCount = 0;
document.querySelectorAll("#card-container button").forEach(function(button) {
    button.addEventListener("click", function () {
      alert("Board Updated Successfully!");
      let decreaseNum = parseInt(document.getElementById("Decrease").innerText);
      let increaseNum = parseInt(document.getElementById("Increase").innerText);
      decreaseNum--;
      increaseNum++;
      document.getElementById("Decrease").innerText = decreaseNum;
      document.getElementById("Increase").innerText = increaseNum;
    //   console.log(num);
      button.disabled = true;
      const fixedTime = new Date().toLocaleTimeString();
      const title = button.closest('.card').querySelector(".card-title").innerText;
      const message = `<h1>You have completed the task: "${title}" at ${fixedTime}</h1>`;

      document.getElementById("Sidebar").innerHTML += message;

        clickedButtonsCount++;

        if (clickedButtonsCount === 6) {
            alert("Congratulations! You have completed all the tasks.");
        }
      
    });
});

// Activity Log section clear
document.querySelector("#clear-btn").addEventListener("click", function () {
  document.getElementById("Sidebar").innerHTML = "";
});

// function for get current time
function getCurrentDate() {
    const now = new Date();
    const options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric"
    };
    return now.toLocaleDateString("en-UK", options);
};


// get current time
document.addEventListener("DOMContentLoaded", function() {
    const currentDate = document.querySelector(".date-card");
    if(currentDate) {
        currentDate.innerHTML = getCurrentDate();
    }
})


// set background color
document.getElementById("color-mode-btn").addEventListener("click", function () {
    document.body.style.backgroundColor = getRandomColor();
});
// function to get random colors
function getRandomColor() {
    const colors = [
      "#E8F5E9",
      "#FFEBEE",
      "#E3F2FD",
      "#51e2f5",
      "#FFF3E0",
      "#f75990",
      "#68d388",
      "#a28089",
      "#ebf6f5",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}