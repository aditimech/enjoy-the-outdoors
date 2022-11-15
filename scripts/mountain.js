window.onload = function () {
    //declare html elements
    let mountainsArrayList = document.getElementById('mountainName');
    console.log(`selected mountain is ${mountainsArrayList}`);

    let mtnArrayLength = mountainsArray.length;
    console.log(`number of mountains is ${mtnArrayLength}`);
    for(i = 0; i < mtnArrayLength; i++) {
        let theOption = new Option(mountainsArray[i].name);
        mountainsArrayList.appendChild(theOption)
    }
  

//event listener
mountainsArrayList.onchange = onMountainChanged;

//event handler
function onMountainChanged() {
    console.log(`change event handler is working`);
    let selectedMountain =mountainsArrayList.value;

    console.log(`you changed your mountain to ${selectedMountain}`)
    return selectedMountain;
}
// add html element
const searchBtn2 =document.getElementById('btn5');
const arrayList = document.getElementById('mountain');

//add event listener
searchBtn2.addEventListener('click',getMountainInfo);


function getMountainInfo() {
    let getMountain = onMountainChanged();
    console.log(`get mountain is working ${getMountain}`);
    let matching = []; 

    let arrayLength = mountainsArray.length;
    for(i = 0; i < arrayLength; i++) {
        if(mountainsArray[i].name == getMountain) {
            matching.push(mountainsArray[i])
        }
    
        let table = document.getElementById("tableBody");
        for(let i = 0; i < arrayLength; i++) {
            let tr = document.createElement("tr");
            let td1 = document.createElement("td");
            td1.innerText = mountainsArray[i].name;
            tr.appendChild(td1);
            table.appendChild(tr);
        }
    }     

console.log(getMountain);
return getMountain;

}

}

