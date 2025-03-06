//your JS code here. If required.

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("btn");

  btn.addEventListener("click", function (event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;

    if (name === "" || age === "") {
      alert("Please enter valid details.");
      return;
    }

    const ageNumber = parseInt(age, 10);

    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (ageNumber > 18) {
          resolve(`Welcome,. You can vote.`);
        } else {
          reject(`Oh sorry. You aren't old enough.`);
        }
      }, 4000); 
    })
      .then((message) => {
        alert(message);
      })
      .catch((err) => {
        alert(err);
      });
  });
});
