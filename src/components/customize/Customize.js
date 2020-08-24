import React from "react";

import { useHistory } from "react-router-dom";

import { motion } from "framer-motion";

import pizzaBase from "../../assets/base.png";
import sauce from "../../assets/sauce.png";
import mushrooms from "../../assets/mushrooms.png";
import olives from "../../assets/olives.png";
import tomatoes from "../../assets/tomatoes.png";
import peppers from "../../assets/peppers.png";
import ham from "../../assets/ham.png";
import sausages from "../../assets/sausages.png";
import cheese from "../../assets/cheese.png";

import "./customize.style.css";

const Customize = ({ ingredients, setIngredients }) => {
  let history = useHistory();

  const handleChange = (event, name) => {
    let newIngredients = JSON.parse(JSON.stringify(ingredients));
    // Toggle the ingredient
    newIngredients[name] = event;
    setIngredients(newIngredients);
    localStorage.setItem("ingredients", JSON.stringify(newIngredients));
  };

  return (
    <div className="customize">
      <div className="custom-img">
        <div className="base-img">
          <img height="100%" width="100%" src={pizzaBase} alt="Pizza Base" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: ingredients["sauce"] ? 100 : -100,
              opacity: ingredients["sauce"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients"
          >
            <img height="100%" width="100%" src={sauce} alt="Sauce" />{" "}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: ingredients["tomatoes"] ? 100 : -100,
              opacity: ingredients["tomatoes"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients"
          >
            <img height="100%" width="100%" src={tomatoes} alt="Tomatoes" />{" "}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: ingredients["mushrooms"] ? 100 : -100,
              opacity: ingredients["mushrooms"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients"
          >
            <img height="100%" width="100%" src={mushrooms} alt="Mushrooms" />{" "}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: ingredients["peppers"] ? 100 : -100,
              opacity: ingredients["peppers"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients"
          >
            <img height="100%" width="100%" src={peppers} alt="Peppers" />{" "}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: ingredients["ham"] ? 100 : -100,
              opacity: ingredients["ham"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients"
          >
            <img height="100%" width="100%" src={ham} alt="Ham" />{" "}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: ingredients["cheese"] ? 100 : -100,
              opacity: ingredients["cheese"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients"
          >
            <img height="100%" width="100%" src={cheese} alt="Cheese" />{" "}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: ingredients["sausages"] ? 100 : -100,
              opacity: ingredients["sausages"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients"
          >
            <img height="100%" width="100%" src={sausages} alt="Sausages" />{" "}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: ingredients["olives"] ? 100 : -100,
              opacity: ingredients["olives"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients"
          >
            {" "}
            <img height="100%" width="100%" src={olives} alt="Olives" />
          </motion.div>
        </div>
      </div>
      <div className="checkbox">
        <label>
          Olives
          <input
            type="checkbox"
            checked={ingredients["olives"]}
            onChange={(event) =>
              handleChange(event.currentTarget.checked, "olives")
            }
          />
        </label>
        <label>
          Mushrooms
          <input
            type="checkbox"
            checked={ingredients["mushrooms"]}
            onChange={(event) =>
              handleChange(event.currentTarget.checked, "mushrooms")
            }
          />
        </label>
        <label>
          Tomatoes
          <input
            type="checkbox"
            checked={ingredients["tomatoes"]}
            onChange={(event) =>
              handleChange(event.currentTarget.checked, "tomatoes")
            }
          />
        </label>
        <label>
          Ham
          <input
            type="checkbox"
            checked={ingredients["ham"]}
            onChange={(event) =>
              handleChange(event.currentTarget.checked, "ham")
            }
          />
        </label>
        <label>
          Cheese
          <input
            type="checkbox"
            checked={ingredients["cheese"]}
            onChange={(event) =>
              handleChange(event.currentTarget.checked, "cheese")
            }
          />
        </label>
        <label>
          Green Peppers
          <input
            type="checkbox"
            checked={ingredients["peppers"]}
            onChange={(event) =>
              handleChange(event.currentTarget.checked, "peppers")
            }
          />
        </label>
        <label>
          Sausages
          <input
            type="checkbox"
            checked={ingredients["sausages"]}
            onChange={(event) =>
              handleChange(event.currentTarget.checked, "sausages")
            }
          />
        </label>
        <label>
          Tomato Sauce
          <input
            type="checkbox"
            checked={ingredients["sauce"]}
            onChange={(event) =>
              handleChange(event.currentTarget.checked, "sauce")
            }
          />
        </label>
        <div className="button">
          <button className="btn" onClick={() => history.push("/checkout")}>
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Customize;
