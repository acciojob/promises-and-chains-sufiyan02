//your JS code here. If required.

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("btn");

  btn.addEventListener("click", function (event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();

    if (name === "" || age === "") {
      alert("Please enter valid details.");
      return;
    }

    const ageNumber = parseInt(age, 10);

    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (ageNumber > 18) {
          resolve(`Welcome, ${name}. You can vote.`);
        } else {
          reject(`Oh sorry ${name}. You aren't old enough.`);
        }
      }, 4000); 
    })
      .then((message) => {
        alert(message);
      })
      .catch((errorMessage) => {
        alert(errorMessage);
      });
  });
});
