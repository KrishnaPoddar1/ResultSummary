document.addEventListener("DOMContentLoaded",load);

async function load (){
 const response = await fetch("./data.json");
 const data = await response.json();
 
 populate(data);
 
}

function populate(data){
    const sectionScore = document.getElementsByClassName("scores")[0];
    
    data.forEach(element => {
    const section = document.createElement("section");
    section.classList.add("results");
    section.id = `${element.category}`;
    section.innerHTML = `
    <img src=${element.icon}>
    <h4>${element.category}</h4>
    <p><b class="bold">${element.score}</b>/100</p>`;
    sectionScore.appendChild(section);
    });

}