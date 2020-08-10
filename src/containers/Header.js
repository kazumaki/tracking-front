import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from '../styles/Header.module.scss';
import { setToken } from '../store/actions/authActions';

const Header = ({ token, setToken }) => {
  const handleLogoutClick = () => {
    setToken();
  };

  return (
    <header className={styles.header}>
      <h2 className={styles.title}>Tracking</h2>
      {token && <button type="button" onClick={handleLogoutClick} onKeyDown={handleLogoutClick} className={styles.logoutButton}>Logout</button>}
    </header>
  );
};

Header.propTypes = {
  token: PropTypes.string.isRequired,
  setToken: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  {
    token: state.authReducer.token,
  }
);

const mapDispathcToProps = dispatch => (
  {
    setToken: () => dispatch(setToken('')),
  }
);

export default connect(mapStateToProps, mapDispathcToProps)(Header);
