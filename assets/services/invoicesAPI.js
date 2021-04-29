import axios from "axios";
import { INVOICES_API } from "../config";
import Cache from "./cache";

function findAll() {
    return axios
        .get(INVOICES_API)
        .then((response) => response.data["hydra:member"]);
}

function deleteInvoice(id) {
    return axios
        .delete(INVOICES_API + "/" + id).then(response => {
            Cache.invalidate("customers");
            return response;
        });
}

function find(id) {
    return axios
        .get(INVOICES_API + "/" + id)
        .then((response) => response.data);
}

function update(id, invoice) {
    return axios.put(INVOICES_API + "/" + id, { ...invoice, customer: `/api/customers/${invoice.customer}` }).then(response => {
        Cache.invalidate("customers");
        return response;
    });
}

function create(invoice) {
    return axios.post(
        INVOICES_API,
        {
            ...invoice,
            customer: `/api/customers/${invoice.customer}`,
        }
    ).then(response => {
        Cache.invalidate("customers");
        return response;
    });
}

export default {
    findAll,
    find,
    create,
    update,
    delete: deleteInvoice
};