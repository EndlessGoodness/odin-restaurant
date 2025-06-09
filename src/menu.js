import dish1Img from './dish1.jpeg';

function createmenu(){
    const contain=document.createElement("container");
    contain.classList.add("container");

    contain.appendChild(
        createchild("dish1", "anokha")
    );
    contain.appendChild(
        createchild("dish2", "nokha")
    );
    contain.appendChild(
        createchild("dish3", "okha")
    );
    return contain;
}
function createchild(name, desc) {
    const child = document.createElement("div");
    child.classList.add("child");
    const name1 = document.createElement("h2");
    name1.textContent = name;
    const des = document.createElement("p");
    des.textContent = desc;
    const fimg = document.createElement("img");
    fimg.src = dish1Img; // Use imported image

    child.appendChild(fimg);
    child.appendChild(name1);
    child.appendChild(des);

    return child;
}
function loadmenu(){
    const main=document.getElementById("main");
    main.textContent="";
    main.appendChild(createmenu());
}
export default loadmenu;