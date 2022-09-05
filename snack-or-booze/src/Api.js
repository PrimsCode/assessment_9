import axios from "axios";
import { v4 as uuid } from 'uuid';

const BASE_API_URL = "http://localhost:5000";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class SnackOrBoozeApi {

  //get snacks
  static async getSnacks() {
    const result = await axios.get(`${BASE_API_URL}/snacks`);
    return result.data;
  }

  //get drinks
  static async getDrinks() {
    const result = await axios.get(`${BASE_API_URL}/drinks`);
    return result.data;
  }

  //create a new food
  static async createFood(formData, foodType) {
    const request = {
      id: uuid(),
      name: formData.name,
      description: formData.description,
      recipe: formData.recipe,
      serve: formData.serve
    }
    const result = await axios.post(`${BASE_API_URL}/${foodType}`, request);
    return result.data;
  }


}

export default SnackOrBoozeApi;
