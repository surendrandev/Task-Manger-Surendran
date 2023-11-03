const inputboxx  = document.getElementById("inputbox");
const listcontainer = document.getElementById("lists");
 
function addTask() {
    if(inputboxx.value === ''){
        alert("You Must Add Something...");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputboxx.value;
        listcontainer.appendChild(li);

        let spin =document.createElement("spin");
        spin.innerHTML= "\u00d7";
        li.appendChild(spin);

    }
   inputboxx.value="";
   saveData();
}
listcontainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPIN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);
function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML);
  
}
function showList(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showList();

 