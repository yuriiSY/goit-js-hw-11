import axios from 'axios';

const BASE_URL = `https://pixabay.com/api`;

export async function fetchData(search, page) {
  const OPTIONS = new URLSearchParams({
    key: '40897256-f68fd432eb22abb1df1949638',
    q: search,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
    page: page,
  });
  try {
    const response = await axios.get(`${BASE_URL}/?${OPTIONS}`);
    const hits = await response.data.totalHits;
    if (hits === 0) {
      throw new Error();
    }
    return response;
  } catch (err) {
    console.log(err);
  }
}
