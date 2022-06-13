import Link from 'next/link';
import React from 'react';
import style from '../styles/NotFound.module.scss';

const NotFoundPage = () => {
  return (
    <div className={style.notFound}>
      <div className={style.text}>
        <h2>Oops...</h2>
        <p>There is no such page</p>
        <Link href="/"><a>Home Page</a></Link>
      </div>
    </div>
  );
}

export default NotFoundPage;