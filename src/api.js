import axios from 'axios';
const baseUrl = 'https://newsapi.org/v2';
const apiKey = process.env.REACT_APP_NEWS_API_KEY;

export const fetchAllArticles = async (pageSize, currentPage = 1) => {
  try {
    // Get ip address
    const ipApiUrl = 'http://api.ipapi.com';
    const ipApiKey = process.env.REACT_APP_IP_API_KEY;
    const ipResponse = await axios.get(`${ipApiUrl}/check?access_key=${ipApiKey}`);
    const countryCode = ipResponse.data.country_code.toLowerCase();
    // Fetch articles from country
    const endpoint = `${baseUrl}/top-headlines?apiKey=${apiKey}&country=${countryCode}&pageSize=${pageSize}&page=${currentPage}`;
    const response = await axios.get(endpoint);
    return response.data;
  } catch (err) {
    throw new Error();
  }
};