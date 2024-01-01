import axios from 'axios'



export const getData = async (url, callback) => {
    try {
      const response = await axios.get(url);
      callback(response.data); // Pass only the data to the callback function
      //console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };