import { drawProducts } from "./drawProducts.js";
import { drawList } from "./drawList.js";
import { params } from "./variable.js";

drawProducts("http://localhost:3000/products?q=");

drawList("http://localhost:3000/category");


// Tinh nang

const input = document.querySelector(".input-box");
const btn = document.querySelector(".button-search");

const search = () => {
    params.q = input.value;
    drawProducts(); 
}

btn.addEventListener("click", () => {
    search()
})

input.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        search();
    }
})


const num = document.querySelector(".pagination-num");
const prev = document.querySelector(".pagination-prev");
const next = document.querySelector(".pagination-next");

next.addEventListener("click" , () => {
    if (params.page >= params.quality / 6){
        return;
    }
    params.page += 1;
    num.innerHTML = params.page;
    drawProducts();
})

prev.addEventListener("click" , () => {
    if (params.page == 1){
        return;
    }
    params.page -= 1;
    num.innerHTML = params.page;
    drawProducts();
})




const selection = document.querySelector("#selection");


selection.addEventListener("change" , () => {
    console.log(selection.value);
    if (selection.value == "mac-dinh"){
        params.sort = "";
    }
    else if (selection.value == "thap-den-cao"){
        params.sort = "price";
        params.type = "asc";
    }
    else if (selection.value == "cao-den-thap"){
        params.sort = "price";
        params.type = "desc";
    }
    else {
        params.sort = "discountPercentage";
        params.type = "desc";
    }
    params.page = 1;
    num.innerHTML =  1;
    drawProducts();
})

