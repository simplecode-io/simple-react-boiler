import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => (
  <div className={styles.header}>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </div>
);

export default Header;
