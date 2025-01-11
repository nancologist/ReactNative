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
        const res = await axios.get(this.BACKEND_URL + '/expenses');
        return res.data.map(expense => this.convertFetchedExpense(expense));
    }

    static async updateExpense(data) {
        try {
            const res = await axios.put(this.BACKEND_URL + '/expenses', data);
            return res.data;
        } catch (e) {
            console.log({...e})
            throw e;
        }
    }

    static async deleteExpense(id) {
        try {
            await axios.delete(this.BACKEND_URL + '/expenses/' + id);
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