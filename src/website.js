import loadHome from "./home";
import loadmenu from "./menu";
import loadabout from "./about";

function createheader(){
    const header=document.createElement("header");
    header.classList.add("header");

    const name=document.createElement("h1");
    name.textContent="Odin's Eye";

    header.appendChild(name);
    header.appendChild(createnav());
    
    return header;
}

function createnav(){
    const nav=document.createElement("nav");
    nav.classList.add("nav");
    
    const home1=document.createElement("button");
    home1.classList.add("learn-more");
    home1.textContent="Home";
    home1.addEventListener("click",(e)=>{
        if(e.target.classList.contains("active"))return;
        setactivebutton(home1);
        loadHome();
    });

    const menu=document.createElement("button");
    menu.classList.add("learn-more");
    menu.textContent="Menu";
    menu.addEventListener("click",(e)=>{
        if(e.target.classList.contains("active"))return;
        setactivebutton(menu);
        loadmenu();
    });

    const About=document.createElement("button");
    About.classList.add("learn-more");
    About.textContent="About";
    About.addEventListener("click",(e)=>{
        if(e.target.classList.contains("active"))return;
        setactivebutton(About);
        loadabout();
    });

    nav.appendChild(home1);
    nav.appendChild(menu);
    nav.appendChild(About);

    return nav;
}

function setactivebutton(button){
    const buttons=document.querySelectorAll(".learn-more");
    buttons.forEach((btn)=>{
        if(btn!=button){
            btn.classList.remove("active");
        }
    });
    button.classList.add("active");
}

function createmain(){
    const main=document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id","main");
    return main;
}

function initializeWebsite(){
    const content=document.getElementById("content");

    content.appendChild(createheader());
    content.appendChild(createmain());
    setactivebutton(document.querySelector(".learn-more"));
    loadHome();
}
export default initializeWebsite;