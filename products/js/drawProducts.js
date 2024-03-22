import { fechAPI } from "./fecthAPI.js";
import { params } from "./variable.js";

const productList = document.querySelector("#products");

export const drawProducts = () => {


    let category = "";
    if (params.category) {
        category = `&category=${params.category}`;
    }

    const api = `http://localhost:3000/products?q=${params.q}&_page=${params.page}&_limit=${params.limit}&_sort=${params.sort}&_order=${params.type}${category}`;
    fechAPI(api)
        .then((data) => {
            const tmp = data.map((item) => {
                return `
            <div class="item">
                <div class="inner-img">
                    <img src="${item.thumbnail}" alt="">
                </div>
                <div class="inner-wrap">
                    <div class="inner-title">
                        ${item.title}
                    </div>
                    <div class="inner-info">
                        <div class="inner-price">
                            ${item.price}$
                        </div>
                        <div class="inner-stock">
                            Còn lại : ${item.stock} sp 
                        </div>
                    </div>
                </div>
                <div class="inner-rating">
                        ${item.discountPercentage}%
                </div>
            </div>
            `;
            })
            productList.innerHTML = tmp.join("");
        })
}