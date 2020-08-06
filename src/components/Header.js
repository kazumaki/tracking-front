import React from 'react';
import styles from '../styles/Header.module.scss';
import { connect } from 'react-redux';

const Header = ({ token }) => (
  <header className={styles.header}>
    <div className={styles.title}>Tracking</div>
    {token && <button className={styles.logoutButton}>Logout</button>}
  </header>
);

const mapStateToProps = state => (
  {
    token: state.authReducer.token,
  }
);

export default connect(mapStateToProps, null)(Header);
