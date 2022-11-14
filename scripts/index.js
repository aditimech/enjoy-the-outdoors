 //add html elements
 const mtnBtn = document.getElementById('btn1');
 const parkBtn = document.getElementById('btn2');

 // add event listener

 mtnBtn.addEventListener('click', goToMountain);
 function goToMountain() {
     mtnBtn = window.open("http://127.0.0.1:5500/html/mountain.html")
 }

 parkBtn.addEventListener('click', goToPark);
 function goToPark() {
     mtnBtn = window.open("http://127.0.0.1:5500/html/parks.html")
 }