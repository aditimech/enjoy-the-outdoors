 //getting states dropdown
window.onload = function () {

// declare the html elements that we need
let locationsArrayList = document.getElementById('locationList');
// console.log(`the select state is ${locationsArrayList}`);


let length = locationsArray.length;
console.log(`number of states: ${length}`);
for(let i = 0; i < length; i++) {
    let theOption = new Option(locationsArray[i]);
    locationsArrayList.appendChild(theOption);
}



// add an event handler to handle the event on the button
function getLocation() {
    console.log('button works');
   
    // this sets a variable called stateName that is set to the option/state that the user selected in the dropdown menu
    let stateName= locationsArrayList.options[locationsArrayList.selectedIndex].text;
    console.log(locationsArrayList.options[locationsArrayList.selectedIndex]);
    // alert(`You slected ${stateName}`);
    return stateName;

}

// let itemToDelete = locationsArrayList.selectedIndex;
// let numberOfOptionTags = locationsArrayList.options.length;
// for(let i = 0; i < numberOfOptionTags; i++) {
//     if (locationsArrayList.options[i].value == itemToDelete) {
//         [locationsArrayList.selectedIndex].remove(i);
//         break;

//     }
// }
//event listener ---
locationsArrayList.onchange = onStateChanged;

// event handler
function onStateChanged() {
    console.log('change event handler works');
    let selectedState = locationsArrayList.value;
   
    console.log(`you changed your state to ${selectedState}`)
    return selectedState;
}

 //getting national park data for search by location
 
 //add html element
 const searchBtn = document.getElementById('btn3');
 const nationalParksArrayList = document.getElementById('nationalParks');

 
//add event listener
searchBtn.addEventListener('click',getNationalParks);

 function getNationalParks(){
    let getState =  onStateChanged();
    console.log(`get state is working ${getState}`)
    let matching = []; 
    let locationsLength = nationalParksArray.length;
    for(let i = 0; i < locationsLength; i++)
    {
    if(nationalParksArray[i].State == getState)
    {
     matching.push(nationalParksArray[i])
    }
    }  
    // displayArray =  document.getElementById('displayState').innerHTML
    // console.log(displayArray);
    console.log(matching) ;
    return matching;  
    
}

//  let locationName = getNationalParks(nationalParksArray,"Kentucky")
//  console.log(locationName)



//  for park type--------------------------


 // declare the html elements that we need
 let locationsNameList = document.getElementById('parksTypesList');
 // console.log(`the select state is ${locationsNameList}`);
 
 
 let Arraylength = parkTypesArray.length;;
 console.log(`number of parks: ${Arraylength}`);
 for(let i = 0; i < Arraylength; i++) {
     let theOption = new Option(parkTypesArray[i]);
     locationsNameList.appendChild(theOption);
 }
 // add an event handler to handle the event on the button
function getParkType() {
 console.log('button works');


 let parkType= locationsNameList.options[locationsNameList.selectedIndex].text;
 console.log(locationsNameList.options[locationsNameList.selectedIndex]);
 alert(`You slected ${parkType}`);
 console.log(` you selected ${parkType}`)
 return parkType;

}
//event listener ---
locationsNameList.onchange = onParkChanged;
// event handler
function onParkChanged() {
    console.log('change event handler works');
    let selectedPark = locationsNameList.value;
   
    console.log(`you changed your parks to ${selectedPark}`)
    return selectedPark;
}
 //getting national park data for search by park type
 
 //add html element
 const searchBtn1 = document.getElementById('btn4');
 const parkTypesArrayList = document.getElementById('locationName');

 
//add event listener
searchBtn1.addEventListener('click',getParksType);

function getParksType(){
    let getParks =  onParkChanged();
    console.log(`you selected ${getParks}`)

        let findLocationName = nationalParksArray.filter((arrayValueType) =>
          arrayValueType.LocationName.includes(getParks)
        );
      console.log(findLocationName);

      
 }
   
 
}

