import odinresImg from "./odinres.jpg";
function createHome(){
    const home=document.createElement("div");
    home.classList.add("home");

    const resimg=document.createElement("img");
    resimg.src=odinresImg;
    
    const head=document.createElement("h1");
    head.textContent="Only for the Gods"
    const head2=document.createElement("h2");
    head2.textContent="It is not just Food. It's a feeling."
    home.appendChild(head);
    home.appendChild(resimg);
    home.appendChild(head2);
    return home;
}
function loadHome(){
    const main=document.getElementById("main");
    main.textContent="";
    main.appendChild(createHome());
}
export default loadHome;