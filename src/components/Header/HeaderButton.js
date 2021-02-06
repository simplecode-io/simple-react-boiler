import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import Button from '../Button';

const HeaderButton = (props) => (
  <div className={styles.Header___button}>
    <Button title={props.title} />
  </div>
);

export default HeaderButton;
