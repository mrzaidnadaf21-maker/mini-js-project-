let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");

icon.addEventListener("click", function () {
  ul.classList.toggle("showData");

  if (ul.className === "showData") {
    document.getElementById("bar").className = "fa-solid fa-xmark";
  } else {
    document.getElementById("bar").className = "fa-solid fa-bars";
  }
});

// navbar

let shops = document.getElementById("shops");
let reviews = document.getElementById("reviews");
let blogs = document.getElementById("blogs");
let contacts = document.getElementById("contacts");

shops.addEventListener("click", function (e) {
  //   e.preventDefault();
  shops.style.color = " rgb(30, 155, 155)";
  reviews.style.color = "black";
  blogs.style.color = "black";
  contacts.style.color = "black";
});

reviews.addEventListener("click", function () {
  reviews.style.color = " rgb(30, 155, 155)";
  shops.style.color = "black";
  blogs.style.color = "black";
  contacts.style.color = "black";
});

blogs.addEventListener("click", function () {
  blogs.style.color = " rgb(30, 155, 155)";
  reviews.style.color = "black";
  shops.style.color = "black";
  contacts.style.color = "black";
});

contacts.addEventListener("click", function () {
  contacts.style.color = " rgb(30, 155, 155)";
  reviews.style.color = "black";
  blogs.style.color = "black";
  shops.style.color = "black";
});

// card js

let crd = document.querySelectorAll(".crd");
let itemPage = document.querySelector(".itemPage");
let container = document.querySelector(".container");
let itmeImg = document.getElementById("itmeImg");
let buyText = document.querySelector(".buyText");
let buyBtn = document.getElementById("buyBtn");

console.log(crd);

crd.forEach(function (curvalue) {
  curvalue.addEventListener("click", function () {
    itemPage.style.display = "flex";
    container.style.display = "none";

    let imgsrc = curvalue.firstElementChild.src;
    itmeImg.src = imgsrc;

    buyBtn.addEventListener("click", function () {
      document.querySelector(".buyPage").style.display = "flex";
      document.querySelector(".buyText").innerHTML = `
        <h3>Enter Details</h3>
        <input type="text" placeholder="Enter your name" id="name"/><br />
        <input type="text" placeholder="Enter your address" id="address" /><br />
        <input type="text" placeholder="Enter your mobile number" id="num"/><br />
        <h3>Payment Option</h3>
        <select>
          <option selected disabled>Select Payment Method</option>
          <option value="Google-Pay">Google-Pay</option>
          <option value="Phone-Pay">Phone-Pay</option>
          <option value="Bharat-Pay">Bharat-Pay</option>
          <option value="Cash-on-delivery">Cash-on-delivery</option></select
        ><br />
        `;

      let button = document.createElement("button");
      button.innerText = "submit";
      buyText.appendChild(button);

      button.addEventListener("click", function () {
        let name = document.getElementById("name");

        if (name.value == "" && address.value == "" && num.value == "") {
          alert("Please enter detail");
        } else {
          alert("Your response recorded");
          document.querySelector(".buyPage").style.display = "none";
        }
      });

      let cross = document.querySelector(".cross");
      cross.addEventListener("click", function () {
        document.querySelector(".buyPage").style.display = "none";
      });
    });
  });
});

//connect

function connect() {
  let name = document.getElementById("name");
  let num = document.getElementById("Number");

  if (name.value == "" && num.value == "") {
    alert("fill Details");
  } else {
    alert("Thanks for connecting");
  }
}
