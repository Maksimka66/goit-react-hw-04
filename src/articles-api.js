import axios from "axios";

const myIdKey = "u15h-5AvBqE9eiHKqaXjUxOcUDbQ1In_DWwVEuu2nN0";

export default async function galleryRequest(query) {
  try {
    const response = await axios.get(
      `https://api.unsplash.com/search/photos/?client_id=${myIdKey}&query=${query}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
