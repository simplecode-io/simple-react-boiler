import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import HeaderButton from './HeaderButton';

const Header = () => (
  <div className={styles.Header}>
    <HeaderButton title="Home" />
  </div>
);

export default Header;
