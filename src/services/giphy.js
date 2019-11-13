const PATH_SEARCH = 'http://api.giphy.com/v1/gifs/search';
const PATH_TRENDING = 'http://api.giphy.com/v1/gifs/trending';
const API_KEY = 'api_key=NTrUfOQyMsagSSx8lEOU7Zx9x1eONTx1';


class GiphyService {  
  getUrl(id) {
    return `https://i.giphy.com/${id}.gif`;
  }

  async getContent(content, offset, limit, searchString = '') {
    let url = '';    

    switch(content) {
      case 'search': {
        url = `${PATH_SEARCH}?${API_KEY}&limit=${limit}&offset=${offset}&q=${searchString}`;
        break;
      }
      case 'trend': {
        url = `${PATH_TRENDING}?${API_KEY}&limit=${limit}&offset=${offset}`;
        break;
      }
      default: {
        url = `${PATH_TRENDING}?${API_KEY}&limit=${limit}&offset=${offset}`;
      }
    }    

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`GiphyService failed, HTTP status ${response.status}`);
    }
    
    const data = await response.json();
    return {
      offset: +offset + +limit,
      value:  data.data.map((item) => ({
              id: item.id,
              title: item.title,
              image: {
                url: this.getUrl(item.id),
                width: item.images.original.width,
                height: item.images.original.height,
              },
            }))
    }
  } 
}

export default new GiphyService();
