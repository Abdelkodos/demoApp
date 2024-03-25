const BASE_URL = "https://adhannmorocco.onrender.com/"

export const getData = async () => fetch(`${BASE_URL}data/267898`).then((res) => res.json())
export const getUser = async () => fetch(`${BASE_URL}user/267898`).then((res) => res.json())