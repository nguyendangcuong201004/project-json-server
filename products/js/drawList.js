import { fechAPI } from "./fecthAPI.js";
import { params } from "./variable.js";
import { drawProducts } from "./drawProducts.js";


const input = document.querySelector(".input-box");

const categoryList = document.querySelector(".category-list");


export const drawList = (api) => {
    fechAPI(api)
    .then((data) => {
        const arrCategory = data.map((item) => {
            return `
                <div class="item-category">
                    ${item}
                </div>
            `;
        })
        categoryList.innerHTML = arrCategory.join("");

        const listCategory = categoryList.querySelectorAll(".item-category");
        listCategory.forEach((item) => {
            item.addEventListener("click", () => {
                params.category = item.innerHTML.trim();
                console.log(params)
                params.q = "";
                input.value = "";
                drawProducts();
            })
        })
    })
}