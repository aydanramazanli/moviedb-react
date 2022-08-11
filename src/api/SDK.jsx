import axios from 'axios'

class SDK {
  constructor() {
    this.ins = axios.create({
      baseURL: 'https://api.themoviedb.org/3',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      params: {
        api_key: '579fa79d34e501aae2fefaae5e307ee0',
      },
    })
    this.accountId = '5f198024a6d931003787052f'
  }

  async getMovies() {
    const {
      data: { results },
    } = await this.ins.get('/discover/movie')
    return results
  }
}

export default SDK
