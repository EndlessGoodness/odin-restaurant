function createabout(){
const contact=document.createElement("div");
contact.classList.add('contact');

const phone=document.createElement("p");
phone.textContent="+91 1234567899";

const address=document.createElement('p');
address.textContent="Asgard, Center of Nine Realms";

contact.appendChild(phone);
contact.appendChild(address);
return contact;
}
function loadabout(){
    const main=document.getElementById("main");
    main.textContent="";
    main.appendChild(createabout());
}
export default loadabout;