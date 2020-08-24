import React, { useState } from "react";

import { motion } from "framer-motion";

import { useHistory } from "react-router-dom";

import pizzaGuy from "../../assets/image.jpg";

import "./checkout.style.css";

const Checkout = ({ ingredients }) => {
  const history = useHistory();

  const [success, setSuccess] = useState(false);
  return (
    <div className="checkout">
      <div className="orders">
        <h2 className="checkout-subtitle">My Ingredients</h2>
        {Object.keys(ingredients).map((ingredient) => {
          return (
            ingredients[ingredient] && (
              <div className="ingredient" key={ingredient}>
                <h4 className="item">{ingredient}</h4>
              </div>
            )
          );
        })}
      </div>
      <div className="btns">
        <button className="btn" onClick={() => setSuccess(true)}>
          Confirm
        </button>
        <button className="btn" onClick={() => history.push("/")}>
          Go Back
        </button>
      </div>
      <div className="success">
        {success && (
          <div>
            {" "}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                y: 200,
                opacity: 1,
              }}
              transition={{ duration: 2 }}
              className="pizza-guy"
            >
              {" "}
              <img src={pizzaGuy} alt="Pizza Guy" />
            </motion.div>
            <div className="main-text">
              <h3 className="success-title">~We have received your order.~</h3>
              <h5 className="text">Order #17546</h5>
              <span className="span">Will Be Ready In 20-25min...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
