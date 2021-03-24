import React, { useEffect, useState } from "react";
import Pagination from "../components/Pagination";

const InvoicesPage = (props) => {
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
          <tr>
            <td>1</td>
            <td>
              <a href="#">Marko Askovic</a>
            </td>
            <td className="text-center">21/04/2020</td>
            <td className="text-center">
              <span className="badge badge-success">Payée</span>
            </td>
            <td className="text-center">1 200,00 €</td>
            <td>
              <button className="btn btn-sm btn-primary mr-1">Editer</button>
              <button className="btn btn-sm btn-danger">Supprimer</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default InvoicesPage;
