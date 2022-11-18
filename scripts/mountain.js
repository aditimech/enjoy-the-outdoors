window.onload = function () {
  //declare html elements
  let mountainsArrayList = document.getElementById("mountainName");
  console.log(`selected mountain is ${mountainsArrayList}`);

  let mtnArrayLength = mountainsArray.length;
  console.log(`number of mountains is ${mtnArrayLength}`);
  for (i = 0; i < mtnArrayLength; i++) {
    let theOption = new Option(mountainsArray[i].name);
    // console.log(theOption);
    mountainsArrayList.appendChild(theOption);
  }

  //event listener
  mountainsArrayList.onchange = onMountainChanged;

  //event handler
  function onMountainChanged() {
    console.log(`change event handler is working`);
    let selectedMountain = mountainsArrayList.value;

    console.log(`you changed your mountain to ${selectedMountain}`);
    return selectedMountain;
  }
  // add html element
  const searchBtn2 = document.getElementById("btn5");
  const arrayList = document.getElementById("mountain");

  //add event listener
  searchBtn2.addEventListener("click", getMountainInfo);

  function getMountainInfo() {
    let getMountain = onMountainChanged();
    mountainsArrayList.onchange = () => {
      tableBody.innerHTML = "";
      console.log(tableBody.innerHTML);
    };

    console.log(`get mountain is working ${getMountain}`);
    let matching = [];

    let arrayLength = mountainsArray.length;
    for (i = 0; i < arrayLength; i++) {
      console.log(mountainsArray[i]);
      if (mountainsArray[i].name == getMountain) {
        matching.push(mountainsArray[i]);
      }
      console.log(matching);
    }

//function that can "fetch" the sunrise/sunset times
async function getSunsetForMountain(lat, lng){
 let response = await fetch(
 `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`);
 let data = await response.json();
 return data;
}

    let table = document.getElementById("tableBody");
    for (let i = 0; i < arrayLength; i++) {
      let tr = document.createElement("tr");
      let td1 = document.createElement("td");
      td1.innerText = matching[i].name;
      tr.appendChild(td1);
      let td2 = document.createElement("td");
      td2.innerText = matching[i].elevation;
      tr.appendChild(td2);
      let td3 = document.createElement("td");
      td3.innerText = matching[i].effort;
      tr.appendChild(td3);
      let td5 = document.createElement("td");
      td5.innerText = matching[i].desc;
      tr.appendChild(td5);
      let td6 = document.createElement("td");
      td6.innerText = matching[i].coords.lat;
      tr.appendChild(td6);
      let td7 = document.createElement("td");
      td7.innerText = matching[i].coords.lng;
      tr.appendChild(td7);
      let td8 = document.createElement("td");
      let img8 = document.createElement("img")
      img8.src = `/enjoy-the-outdoors/images/${matching[i].img}`
      img8.id = `tableImage`
      td8.appendChild(img8)
      tr.appendChild(td8);
      getSunsetForMountain(matching[i].coords.lat, matching[i].coords.lng).then(data => {
        console.log(data.results.sunrise)
        let td9 = document.createElement("td");
        td9.innerText = data.results.sunrise;
        tr.appendChild(td9);
        let td10 = document.createElement("td");
        td10.innerText = data.results.sunset;
        tr.appendChild(td10);
        

       });



      table.appendChild(tr);
    }
  }


};
