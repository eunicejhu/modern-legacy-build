import axios from 'axios';

class PenguinRandomHouse {
  static getCats() {
    return axios.get("https://api.thecatapi.com/v1/breeds");
  }

}

export { PenguinRandomHouse };
