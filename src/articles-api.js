import axios from "axios";

export default async function galleryRequest(query, page) {
  const params = new URLSearchParams({
    client_id: "u15h-5AvBqE9eiHKqaXjUxOcUDbQ1In_DWwVEuu2nN0",
    query,
    page,
    per_page: 12,
  });
  const response = await axios.get(
    `https://api.unsplash.com/search/photos/?${params}`
  );
  return response.data;
}
