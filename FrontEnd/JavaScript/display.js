const gallery = document.getElementById("gallery");
const galleryEdit = document.getElementById("galleryEdit");               

// affiche les éléments sur la page projets
export const displayInfos = (infos) => {

  document.getElementById("gallery").innerHTML = "";
  
  for(let i = 0; i < infos.length; i++){
  
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    img.src = infos[i].imageUrl;
    img.alt = infos[i].title;
    img.crossOrigin = "anonymous";
    figure.className = infos[i].categoryId;
  
    const figcaption = document.createElement("figcaption");
    figcaption.innerText = infos[i].title;
  
    figure.appendChild(img);
    figure.appendChild(figcaption);
    gallery.appendChild(figure);
  } 
}
  
// affiche les éléments sur la galerie photo
export const displayPhoto = (infos) => {
  document.getElementById("galleryEdit").innerHTML = "";
  
  for(let i = 0; i < infos.length; i++){
    const div = document.createElement("div");
    const button = document.createElement("button");
    const img = document.createElement("img");
    const p = document.createElement("p");
    const icon = document.createElement("img");
  
    img.src = infos[i].imageUrl;
    img.alt = infos[i].title;
    img.crossOrigin = "anonymous";
    p.innerText = "éditer";
    icon.src = "../assets/icons/trash.svg";
    icon.crossOrigin = "anonymous";
    icon.className = "deleteBtn";
    button.className = "btnIcon";
    div.className = "card";
    div.id = infos[i].id;
  
    button.appendChild(icon)
    div.appendChild(img);
    div.appendChild(button)
    div.appendChild(p);
    galleryEdit.appendChild(div);
  }
}