var cityDirectories: string[] = [];
var cities: string[] = [];
var countries: string[] = [];
var totalPopulation: number[] = [];

const addDirectory = (city: string, country: string, population: number) => {
  cities.push(city);
  countries.push(country);
  totalPopulation.push(population);
  cityDirectories.push( "{ city: " + city + ", country: " + country + ", population: " + population + " }");


  displayDirectory();
};

export const displayDirectory = () => {
  let cityList = document.getElementById("myList");

  if (cityList) {
    while (cityList.hasChildNodes() && cityList.firstChild) {
      cityList.removeChild(cityList.firstChild);
    }
  }

  cityDirectories.forEach((element) => {
    let li = document.createElement("li");
    li.innerText = element;
    if (cityList) {
      cityList.appendChild(li);
    }
  });
};

export const searchDirectory = (searchInput : string) =>{

    let searchList = document.getElementById("myList");

    if (searchList) {
        while (searchList.hasChildNodes() && searchList.firstChild) {
            searchList.removeChild(searchList.firstChild);
        }
    }

    for(let i=0; i< cityDirectories.length; i++){

        if(cities[i].toLocaleLowerCase().includes(searchInput.toLowerCase()) || countries[i].toLocaleLowerCase().includes(searchInput.toLowerCase())){
            let li = document.createElement("li");
            li.innerText = cityDirectories[i];
            if (searchList) {
                searchList.appendChild(li);
            }
        }
    }

    
} 
