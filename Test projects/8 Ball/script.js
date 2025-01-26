function welcomeMessage() {
  let userName = document.querySelector(".name").value;
  document.querySelector(
    ".welcome_message"
  ).innerHTML = `<p>Hello ${userName}! What's your <span class="tooltip">question<span class="tooltiptext">Ask only Yes/No questions.</span>
</span>?</p>`;
}

document.getElementById("ask").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent form submission
  let question = document.getElementById("question").value;
  let output = document.getElementById("output");
  var randomNumber = Math.floor(Math.random() * 8);
  if (question.trim() === "") {
    output.innerHTML = "Please ask a question :(";
    return;
  }
  switch (randomNumber) {
    case 0:
      output.innerHTML = "It is certain";
      break;
    case 1:
      output.innerHTML = "It is decidedly so";
      break;
    case 2:
      output.innerHTML = "Reply hazy try again";
      break;
    case 3:
      output.innerHTML = "Cannot predict now";
      break;
    case 4:
      output.innerHTML = "Do not count on it";
      break;
    case 5:
      output.innerHTML = "My sources say no";
      break;
    case 6:
      output.innerHTML = "Outlook not so good";
      break;
    case 7:
      output.innerHTML = "Signs point to yes";
      break;
    case "":
  }
});
