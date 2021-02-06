import React from "react";
import styles from "./Button.module.scss";

const Button = (props) => (
  <button className={styles.button}>{props.title}</button>
);

export default Button;
