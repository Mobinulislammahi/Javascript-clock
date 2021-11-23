setInterval(setClock, 1000);
			
const hours = document.querySelector(".hour");
const minutes = document.querySelector(".minute");
const seconds = document.querySelector(".second");

function setClock(){
const currentdate = new Date()
const secondratio = currentdate.getSeconds() / 60;
const minuteratio = (secondratio + currentdate.getMinutes()) / 60;
const hourratio = (minuteratio + currentdate.getHours ()) / 12;

  setRotation(seconds, secondratio)
  setRotation(minutes, minuteratio)
  setRotation(hours, hourratio)
}
function setRotation(element, rotationRatio){
element.style.setProperty('--rotation', rotationRatio * 360)
}
setClock()

