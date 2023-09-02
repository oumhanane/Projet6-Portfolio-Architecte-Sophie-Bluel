const gallery = document.getElementById("gallery");               

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
  
