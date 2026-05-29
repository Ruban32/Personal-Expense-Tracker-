let balance = 0;

function addTransaction(){

  const text = document.getElementById("text").value;
  const amount = parseFloat(document.getElementById("amount").value);
  const type = document.getElementById("type").value;

  if(text.trim() === "" || isNaN(amount)){
    alert("Please fill all fields correctly");
    return;
  }

  const list = document.getElementById("list");

  const li = document.createElement("li");

  li.innerHTML = `
    ${text}
    <span class="${type}">
      ${type === "income" ? "+" : "-"}₹${amount}
    </span>
    <button onclick="removeTransaction(this, ${type === "income" ? amount : -amount})">X</button>
  `;

  list.appendChild(li);

  if(type === "income"){
    balance += amount;
  } else {
    balance -= amount;
  }

  document.getElementById("balance").innerText = `₹${balance}`;

  document.getElementById("text").value = "";
  document.getElementById("amount").value = "";
}

function removeTransaction(btn, value){
  btn.parentElement.remove();
  balance -= value;
  document.getElementById("balance").innerText = `₹${balance}`;
}
