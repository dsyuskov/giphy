const PATH_SEARCH_GIFS = 'http://api.giphy.com/v1/gifs/search';
const PATH_SEARCH_STICKERS = 'http://api.giphy.com/v1/stickers/search';
const PATH_TRENDING_GIFS = 'http://api.giphy.com/v1/gifs/trending';
const PATH_TRENDING_STICKERS = 'http://api.giphy.com/v1/stickers/trending';
const API_KEY = 'api_key=NTrUfOQyMsagSSx8lEOU7Zx9x1eONTx1';

export const contentAPI = {
  SEARCH_GIFS: 'search-gif',
  SEARCH_STIKERS: 'search-stiker',
  TRENDING_GIFS: 'trend-gif',
  TRENDING_STIKERS: 'trend-stiker',
}

class GiphyService {
  getUrl(id) {
    return `https://i.giphy.com/${id}.gif`;
  }

  async getContent(content, offset = 0, limit = 5, searchString = '') {
    let url = '';
    console.log(`${content}&limit=${limit}&offset=${offset}&q=${searchString}`);
    switch(content) {
      case contentAPI.SEARCH_GIFS: {
        url = `${PATH_SEARCH_GIFS}?${API_KEY}&limit=${limit}&offset=${offset}&q=${searchString}`;
        break;
      }
      case contentAPI.SEARCH_STIKERS: {
        url = `${PATH_SEARCH_STICKERS}?${API_KEY}&limit=${limit}&offset=${offset}&q=${searchString}`;
        break;
      }
      case contentAPI.TRENDING_GIFS: {
        url = `${PATH_TRENDING_GIFS}?${API_KEY}&limit=${limit}&offset=${offset}`;
        break;
      }
      case contentAPI.TRENDING_STIKERS: {
        url = `${PATH_TRENDING_STICKERS}?${API_KEY}&limit=${limit}&offset=${offset}`;
        break;
      }
      default: {
        url = `${PATH_TRENDING_GIFS}?${API_KEY}&limit=${limit}&offset=${offset}`;
      }
    }

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`GiphyService failed, HTTP status ${response.status}`);
    }
    const data = await response.json();
    return {
      newOffset: offset + +limit,
      value:  data.data.map((item) => ({
        id: item.id,
        title: item.title,
        imageUrl: this.getUrl(item.id),
      })),
    };
  }
}

export default new GiphyService();
