import axios from "axios";

const blogFetch = axios.create({
    baseURL: "https://server-api-com-front.vercel.app/",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

export default blogFetch;