import axios from 'axios';

const searchImages = async (term) => {

  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID YDFIpQu9D7aE9HtlYaKinsAzH_fIpuC27e4omg_Y4ig'
    },
    params: {
      query: term
    }
  });

  return response.data.results;

};

export default searchImages;