import React, { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import axios from "axios";
import moment from "moment";

const STATUS_CLASSES = {
  PAID : "success",
  SENT : "primary",
  CANCELLED : "danger"
}

const InvoicesPage = (props) => {
  const [invoices, setInvoices] = useState([]);

  const fetchInvoices = async () => {
    try {
      const data = await axios
        .get("http://localhost:8000/api/invoices")
        .then((response) => response.data["hydra:member"]);
      setInvoices(data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchInvoices();
  }, []);

  const formatDate = (str) => moment(str).format('DD/MM/YYYY');

  return (
    <>
      <h1>Liste des factures</h1>

      <table className="table table-hover">
        <thead>
          <tr>
            <th>Numéro</th>
            <th>Client</th>
            <th className="text-center">Date d'envoi</th>
            <th className="text-center">Statut</th>
            <th className="text-center">Montant</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.id}>
              <td>{invoice.chrono}</td>
              <td>
                <a href="#">{invoice.customer.firstName} {invoice.customer.lastName}</a>
              </td>
              <td className="text-center">{formatDate(invoice.sentAt)}</td>
              <td className="text-center">
                <span className={"badge badge-" + STATUS_CLASSES[invoice.status]}>{invoice.status}</span>
              </td>
              <td className="text-center">{invoice.amount.toLocaleString()} €</td>
              <td>
                <button className="btn btn-sm btn-primary mr-1">Editer</button>
                <button className="btn btn-sm btn-danger">Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default InvoicesPage;
