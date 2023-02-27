import axios from "axios";
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const API_KEY='d02a53fd64msh87d0fc2519b6515p191187jsnaa5e1e5d21f8'
const options = {
    params: {
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key':API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromApi = async (url) =>{
     const {data} = await axios.get(`${BASE_URL}/${url}`, options)
    return data;
}

