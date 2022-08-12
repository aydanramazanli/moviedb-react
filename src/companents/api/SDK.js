import axios from "axios";

class SDK {
  constructor() {
    this.ins = axios.create({
      baseURL: "https://api.themoviedb.org/3",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      params: {
        api_key: "579fa79d34e501aae2fefaae5e307ee0",
      },
    });
    this.accountId = "5f198024a6d931003787052f";
  }

  async getData(searchKey) {
    const type = searchKey ? "search" : "discover";
    const {
      data: { results },
    } = await this.ins.get(`/${type}/movie`, {
      params: {
        query: searchKey,
      },
    });
    return results;
  }


  async getPost(id) {
    try {
      const req = await this.ins.get(`/movie/${id}`);
      const res = req.data;
      return res
    } catch (error) {
      console.log(error);
    }
  }

 


}

export default SDK;
