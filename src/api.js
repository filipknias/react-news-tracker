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

export const fetchQueryArticles = async (filters, pageSize, currentPage = 1) => {
  try {
    // Convert query object to query string
    const queryString = Object.entries(filters)
                              .filter(([key, value]) => value !== null)
                              .map(([key, value]) => `${key}=${value}`)
                              .join("&");
                              
    // Fetch articles
    const response = await axios.get(`${baseUrl}/everything?apiKey=${apiKey}&page=${currentPage}&pageSize=${pageSize}&${queryString}`);
    return response.data;
  } catch (err) {
    console.log(err.response);
    throw new Error();
  }
};