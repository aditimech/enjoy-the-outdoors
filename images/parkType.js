//getting ParksTYpe dropdown
window.onload = function () {

    // declare the html elements that we need
    let locationsNameList = document.getElementById('locationName');
    // console.log(`the select state is ${locationsNameList}`);
    
    
    let Arraylength = parkTypesArray.length;;
    console.log(`number of states: ${length}`);
    for(let i = 0; i < Arraylength; i++) {
        let theOption = new Option(parkTypesArray[i]);
        locationsNameList.appendChild(theOption);
    }
}