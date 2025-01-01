import axios from "axios";

export class AppApi {
    static BACKEND_URL = 'http://192.168.178.67:8080'

    static async postExpense(data) {
        try {
            return axios.post(this.BACKEND_URL + '/expenses', data);
        } catch (e) {
            console.log({...e})
            throw e;
        }
    }
}