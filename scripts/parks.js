//getting states dropdown
window.onload = function () {
  // declare the html elements that we need
  let locationsArrayList = document.getElementById("locationList");
  // console.log(`the select state is ${locationsArrayList}`);

  let length = locationsArray.length;
  console.log(`number of states: ${length}`);
  for (let i = 0; i < length; i++) {
    let theOption = new Option(locationsArray[i]);
    locationsArrayList.appendChild(theOption);
  }

 

  //event listener ---
  locationsArrayList.onchange = onStateChanged;

  locationList.onchange = () => {
    tableBody.innerHTML = "";
    console.log(tableBody.innerHTML);
  };

  // event handler
  function onStateChanged() {
    matching = [];

    console.log("change event handler works");
    let selectedState = locationsArrayList.value;

    console.log(`you changed your state to ${selectedState}`);
    return selectedState;
  }

  //getting national park data for search by location

  //add html element
  const searchBtn = document.getElementById("btn3");
  const nationalParksArrayList = document.getElementById("nationalParks");

  //add event listener
  searchBtn.addEventListener("click", getNationalParks);

  let matching = [];
  function getNationalParks() {
    let getState = onStateChanged();
    console.log(`get state is working ${getState}`);
    // let matching = [];
    let locationsLength = nationalParksArray.length;
    for (let i = 0; i < locationsLength; i++) {
      if (nationalParksArray[i].State == getState) {
        matching.push(nationalParksArray[i]);
      }
    }
    // console.log(matching);

    let table = document.getElementById("tableBody");
    for (let i = 0; i < matching.length; i++) {
      let tr = document.createElement("tr");
      let td1 = document.createElement("td");
      td1.innerText = matching[i].LocationID.toUpperCase();
      tr.appendChild(td1);
      let td2 = document.createElement("td");
      td2.innerText = matching[i].LocationName;
      tr.appendChild(td2);
      let td3 = document.createElement("td");
      td3.innerText = matching[i].Address;
      tr.appendChild(td3);
      let td4 = document.createElement("td");
      td4.innerText = matching[i].City;
      tr.appendChild(td4);
      let td5 = document.createElement("td");
      td5.innerText = matching[i].State;
      tr.appendChild(td5);
      let td6 = document.createElement("td");
      td6.innerText = matching[i].ZipCode;
      tr.appendChild(td6);
      let td7 = document.createElement("td");
      td7.innerText = matching[i].Phone;
      tr.appendChild(td7);
      let td8 = document.createElement("td");
      td8.innerText = matching[i].Fax;
      tr.appendChild(td8);
      let td9 = document.createElement("td");
      td9.innerText = matching[i].Latitude;
      tr.appendChild(td9);
      let td10 = document.createElement("td");
      td10.innerText = matching[i].Longitude;
      tr.appendChild(td10);
      let td11 = document.createElement("td");
      td11.innerText = matching[i].Location.coordinates;
      tr.appendChild(td11);
      let td12 = document.createElement("td");
      td12.innerText = matching[i].Location.type;
      tr.appendChild(td12);
      table.appendChild(tr);
    }

    console.log(matching);
    return matching;
  }

  //  for park type--------------------------

  // declare the html elements that we need
  const locationsNameList = document.getElementById("parksTypesList");

  // console.log(`the select state is ${locationsNameList}`);

  let Arraylength = parkTypesArray.length;
  console.log(`number of parks: ${Arraylength}`);
  for (let i = 0; i < Arraylength; i++) {
    let theOption = new Option(parkTypesArray[i]);
    locationsNameList.appendChild(theOption);
  }

  // event handler
  function onParkChanged() {
    console.log("change event handler works");
    let selectedPark = locationsNameList.value;

    tableBody.innerHTML = "";
    console.log(tableBody.innerHTML);

    console.log(`you changed your parks to ${selectedPark}`);
    return selectedPark;
  }
  //getting national park data for search by park type

  //add html element
  const searchBtn1 = document.getElementById("btn4");
  const parkTypesArrayList = document.getElementById("locationName");

  //add event listener
  searchBtn1.addEventListener("click", getParksType);

  function getParksType() {
    let getParks = onParkChanged();
    console.log(`you selected ${getParks}`);

    let findLocationName = nationalParksArray.filter((arrayValueType) =>
      arrayValueType.LocationName.includes(getParks)
    );
    console.log(findLocationName);
    let table = document.getElementById("tableBody");
    for (let i = 0; i < findLocationName.length; i++) {
      let tr = document.createElement("tr");
      let td1 = document.createElement("td");
      td1.innerText = findLocationName[i].LocationID.toUpperCase();
      tr.appendChild(td1);
      let td2 = document.createElement("td");
      td2.innerText = findLocationName[i].LocationName;
      tr.appendChild(td2);
      let td3 = document.createElement("td");
      td3.innerText = findLocationName[i].Address;
      tr.appendChild(td3);
      let td4 = document.createElement("td");
      td4.innerText = findLocationName[i].City;
      tr.appendChild(td4);
      let td5 = document.createElement("td");
      td5.innerText = findLocationName[i].State;
      tr.appendChild(td5);
      let td6 = document.createElement("td");
      td6.innerText = findLocationName[i].ZipCode;
      tr.appendChild(td6);
      let td7 = document.createElement("td");
      td7.innerText = findLocationName[i].Phone;
      tr.appendChild(td7);
      let td8 = document.createElement("td");
      td8.innerText = findLocationName[i].Fax;
      tr.appendChild(td8);
      let td9 = document.createElement("td");
      td9.innerText = findLocationName[i].Latitude;
      tr.appendChild(td9);
      let td10 = document.createElement("td");
      td10.innerText = findLocationName[i].Longitude;
      tr.appendChild(td10);
      let td11 = document.createElement("td");
      td11.innerText = findLocationName[i].Location.coordinates;
      tr.appendChild(td11);
      let td12 = document.createElement("td");
      td12.innerText = findLocationName[i].Location.type;
      tr.appendChild(td12);
      table.appendChild(tr);
    }
  }
};
