const functionalitiesNavActive = document.querySelector("#functionalitiesNav svg.active").cloneNode(true);
const functionalitiesNavNotActive1 = document.querySelector("#functionalitiesNav svg:not(.active)").cloneNode(true);
const functionalitiesNavNotActive2 = document.querySelector("#functionalitiesNav svg:not(.active)").cloneNode(true);
const functionalitiesNavNotActive3 = document.querySelector("#functionalitiesNav svg:not(.active)").cloneNode(true);
const functionalitiesNav = document.getElementById("functionalitiesNav");
const functionality = document.getElementsByClassName('functionality');


const functionalitiesContainer = document.getElementById("functionalitiesContainer");

const setFunctionality = (index) => {
  functionalitiesNav.innerHTML = "";

  if(index == 3){
    functionalitiesNav.appendChild(functionalitiesNavNotActive1);
    functionalitiesNav.appendChild(functionalitiesNavNotActive2);
    functionalitiesNav.appendChild(functionalitiesNavNotActive3);
    functionalitiesNav.appendChild(functionalitiesNavActive);
  }

  else if(index == 2){
    functionalitiesNav.appendChild(functionalitiesNavNotActive1);
    functionalitiesNav.appendChild(functionalitiesNavNotActive2);
    functionalitiesNav.appendChild(functionalitiesNavActive);
    functionalitiesNav.appendChild(functionalitiesNavNotActive3);
  }

  else if(index == 1){
    functionalitiesNav.appendChild(functionalitiesNavNotActive1);
    functionalitiesNav.appendChild(functionalitiesNavActive);
    functionalitiesNav.appendChild(functionalitiesNavNotActive2);
    functionalitiesNav.appendChild(functionalitiesNavNotActive3);
  }

  else{
    functionalitiesNav.appendChild(functionalitiesNavActive);
    functionalitiesNav.appendChild(functionalitiesNavNotActive1);
    functionalitiesNav.appendChild(functionalitiesNavNotActive2);
    functionalitiesNav.appendChild(functionalitiesNavNotActive3);
  }
}

functionalitiesContainer.addEventListener("scroll", (e) => {
  const scrollLeft = e.target.scrollLeft;

  const width = functionality[0].offsetWidth;

  if(scrollLeft > functionality[2].offsetLeft + width / 2) setFunctionality(3);
  else if(scrollLeft > functionality[1].offsetLeft + width / 2) setFunctionality(2);
  else if(scrollLeft > width / 2) setFunctionality(1);
  else setFunctionality(0);

});

functionalitiesNav.innerHTML = "";
functionalitiesNav.appendChild(functionalitiesNavActive);
functionalitiesNav.appendChild(functionalitiesNavNotActive1);
functionalitiesNav.appendChild(functionalitiesNavNotActive2);
functionalitiesNav.appendChild(functionalitiesNavNotActive3);