import React from 'react';
import style from '../styles/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.copyright}>
          <span>©2022 BurgerApp Next.js App</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer