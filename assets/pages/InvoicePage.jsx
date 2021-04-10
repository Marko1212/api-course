import React, { useState } from "react";
import Field from "../components/forms/Field";

const InvoicePage = (props) => {

    const [invoice, setInvoice] = useState({
        amount: "",
        customer: "",
        status: ""
    });
    
  return (
    <>
      <h1>Création d'une facture</h1>
      <form>
          <Field name="amount" type="number" placeholder="Montant de la facture" label="Montant" onChange={handleChanges} value={} />
      </form>
    </>
  );
};

export default InvoicePage;
