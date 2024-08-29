let form = document.getElementById("form");
let list = document.getElementById("list");
let select = document.getElementById("selection");
let localdata = JSON.parse(localStorage.getItem("data")) || [];
let isNotificationsAllowed = false;

Notification.requestPermission().then((permission) => {
  if (permission === "granted") {
    isNotificationsAllowed = true;
  } else {
    console.error("Notification permission denied.");
  }
});

function deleteItem(id) {
  localdata.splice(id, 1);
  localStorage.setItem("data", JSON.stringify(localdata));
  displayList();
}

let scheduler = (data, index) => {
  const { medicine, time, dozes } = data;
  console.log(time);
  if (time) {
    if (window.medicineIntervals) {
      window.medicineIntervals.forEach(clearInterval);
    }

    window.medicineIntervals = [];

    let dosesRemaining = parseInt(dozes, 10);
    let interval = setInterval(() => {
      if (isNotificationsAllowed) {
        new Notification("Take " + medicine);
        if (dosesRemaining !== "No") {
          dosesRemaining -= 1;
          data.dozes = dosesRemaining.toString();
          localdata[index] = data;
          localStorage.setItem("data", JSON.stringify(localdata));
          displayList();
        }
        if (dosesRemaining <= 0) {
          clearInterval(interval);
          deleteItem(index);
        }
      } else {
        console.error("Notification permission is not granted.");
      }
    }, time * 1000);

    window.medicineIntervals.push(interval);
  }
};

let displayList = () => {
  list.innerHTML = "";
  localdata.forEach((data, i) => {
    let listitems = document.createElement("section");
    listitems.style.display = "flex";
    listitems.innerHTML = `
      <p>Medicine: ${data.medicine} Time: ${data.time} seconds ${data.dozes === "No" ? '' : `Doses: ${data.dozes}`}</p>
      <button onClick="deleteItem(${i})">delete</button>
    `;
    list.appendChild(listitems);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  localdata.forEach((data, i) => {
    scheduler(data, i);
  });

  let nooption = document.createElement('option');
  nooption.value = "No";
  nooption.text = "No";
  select.appendChild(nooption);

  for (let i = 1; i <= 100; i++) {
    let option = document.createElement('option');
    option.value = i;
    option.text = i;
    select.appendChild(option);
  }
});

displayList();

form.onsubmit = function(event) {
  event.preventDefault();

  let formdata = new FormData(event.target);
  let data = {
    medicine: formdata.get("medicine"),
    time: parseInt(formdata.get("time"), 10),
    dozes: formdata.get("dozes")
  };

  if (isNaN(data.time) || data.time <= 0) {
    console.error("Invalid time value.");
    return;
  }

  localdata.push(data);
  localStorage.setItem("data", JSON.stringify(localdata));

  displayList();
  scheduler(data, localdata.length - 1);
};
