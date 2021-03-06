import React from "react";
import PropTypes from "prop-types";
import { Field } from "redux-form";
import { CardNumberElement, CardExpiryElement, CardCVCElement } from "react-stripe-elements";
import { PaymentsInput } from "./PaymentsInput";
import "./style.css";

const base = {
  fontSize: "15px",
  fontFamily: "Avenir"
};

export const SetupPaymentsUI = ({ handleSubmit, submit }) => (
  <form className="payment-form" onSubmit={handleSubmit(submit)}>
    <div className="payment-form__details">
      <Field name="cardholder" component={PaymentsInput} placeholder="Cardholder's Name" />
      <Field name="zipcode" component={PaymentsInput} placeholder="Zipcode" maxLength="5" />
    </div>
    <div className="payment-form__stripe">
      <CardNumberElement classes={{ base: "card__number" }} style={{ base }} />
      <CardExpiryElement classes={{ base: "card__expiry" }} style={{ base }} />
      <CardCVCElement classes={{ base: "card__cvc" }} style={{ base }} />
    </div>
    <button type="submit" className="payment-form__button">
      Submit
    </button>
  </form>
);

SetupPaymentsUI.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired
};
