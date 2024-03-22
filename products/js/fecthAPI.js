export const fechAPI = async (api) => {
    const res = fetch(api)
        .then((respone) => {
            return respone.json();
        })
        .then((data) => {
            return data;
        })
    return res;
}