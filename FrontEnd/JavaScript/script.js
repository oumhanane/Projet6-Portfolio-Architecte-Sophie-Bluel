import { getWorks } from "./api.js";
import { displayInfos } from "./display.js";

// Récupération des éléments du DOM 
const filterAll = document.getElementById("all");
const filterObjects = document.getElementById("objects");
const filterAppartments = document.getElementById("apartments");
const filterHotels = document.getElementById("hotels");

// Filtre les éléments
const main = async () => {
    const infos = await getWorks();
  
    displayInfos(infos);
  
    filterAll.addEventListener("click", () => {
      displayInfos(infos);
    })
  
    filterObjects.addEventListener("click", () => {
      const objectsFilter = infos.filter( info => {
        return info.categoryId === 1 
      })
      displayInfos(objectsFilter);
    })
  
    filterAppartments.addEventListener("click", () => {
      const objectsFilter = infos.filter( info => {
        return info.categoryId === 2
      })
      displayInfos(objectsFilter);
    })
  
    filterHotels.addEventListener("click", () => {
      const objectsFilter = infos.filter( info => {
        return info.categoryId === 3 
      })
      displayInfos(objectsFilter);
    })
}