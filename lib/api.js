const BASE_URL = "https://adhannmorocco.onrender.com/data"

export const getData = async () => fetch(`${BASE_URL}`).then((res) => res.json())