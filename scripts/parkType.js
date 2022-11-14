//getting ParksTYpe dropdown
window.onload = function () {

    // declare the html elements that we need
    let locationsNameList = document.getElementById('parksTypesList');
    // console.log(`the select state is ${locationsNameList}`);
    
    
    let Arraylength = parkTypesArray.length;;
    console.log(`number of states: ${length}`);
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

}