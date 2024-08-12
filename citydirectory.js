"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchDirectory = exports.displayDirectory = void 0;
var cityDirectories = [];
var cities = [];
var countries = [];
var totalPopulation = [];
const addDirectory = (city, country, population) => {
    cities.push(city);
    countries.push(country);
    totalPopulation.push(population);
    cityDirectories.push("{ city: " + city + ", country: " + country + ", population: " + population + " }");
    (0, exports.displayDirectory)();
};
const displayDirectory = () => {
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
exports.displayDirectory = displayDirectory;
const searchDirectory = (searchInput) => {
    let searchList = document.getElementById("myList");
    if (searchList) {
        while (searchList.hasChildNodes() && searchList.firstChild) {
            searchList.removeChild(searchList.firstChild);
        }
    }
    for (let i = 0; i < cityDirectories.length; i++) {
        if (cities[i].toLocaleLowerCase().includes(searchInput.toLowerCase()) || countries[i].toLocaleLowerCase().includes(searchInput.toLowerCase())) {
            let li = document.createElement("li");
            li.innerText = cityDirectories[i];
            if (searchList) {
                searchList.appendChild(li);
            }
        }
    }
};
exports.searchDirectory = searchDirectory;
