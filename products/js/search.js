import { params } from "./variable.js";

export const search = () => {
    params.q = input.value;
    drawProducts(); 
}