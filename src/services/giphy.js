const PATH_SEARCH = 'http://api.giphy.com/v1/gifs/search';
const PATH_TRENDING = 'http://api.giphy.com/v1/gifs/trending';
const API_KEY = 'api_key=NTrUfOQyMsagSSx8lEOU7Zx9x1eONTx1';

class GiphyService {

  async getTranding() {
    const url = `${PATH_TRENDING}?${API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`GiphyService getTranding failed, HTTP status ${response.status}`);
    }
    const data = await response.json();    
    return data.data.map((item) => {
      return {
        id: item.id,
        title: item.title,        
        url: item.url,
        embed_url: item.embed_url,
      }      
    });
  }
}

export default new GiphyService();
