const PATH_SEARCH = 'http://api.giphy.com/v1/gifs/search';
const PATH_TRENDING = 'http://api.giphy.com/v1/gifs/trending';
const API_KEY = 'api_key=NTrUfOQyMsagSSx8lEOU7Zx9x1eONTx1';
//const LIMIT = 'limit=3'

class GiphyService {

  getUrl(id) {    
    return `https://i.giphy.com/${id}.gif`;
  }

  async getTranding(offset, limit) {
    console.log(limit);
    let url = `${PATH_TRENDING}?${API_KEY}&limit=${limit}&offset=${offset}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`GiphyService getTranding failed, HTTP status ${response.status}`);
    }
    const data = await response.json();    
    return data.data.map((item) => {
      console.log(item);
      return {
        id: item.id,
        title: item.title,                
        image: {
          url: this.getUrl(item.id),          
          width: item.images.original.width,
          height: item.images.original.height,
        }                
      }      
    });
  }
}

export default new GiphyService();
