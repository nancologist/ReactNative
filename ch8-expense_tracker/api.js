import axios from "axios";

export class AppApi {
    static BACKEND_URL = 'http://192.168.178.67:8080'

    static async postExpense(data) {
        try {
            const res = await axios.post(this.BACKEND_URL + '/expenses', data);
            return res.data;
        } catch (e) {
            console.log({...e})
            throw e;
        }
    }

    static async getExpenses() {
        try {
            const res = await axios.get(this.BACKEND_URL + '/expenses');
            return res.data.map(expense => this.convertFetchedExpense(expense));
        } catch (e) {
            console.log({...e})
            throw e;
        }
    }

    static convertFetchedExpense(obj) {
        return {
            ...obj,
            date: new Date(obj.date)
        }
    }
}