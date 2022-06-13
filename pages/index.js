import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import style from '../styles/Home.module.scss'

const Home = () => {

  return (
    <>
      <Head>
        <title>Fat Burgers | Home</title>
        <meta name="title" content="Fat Burgers"></meta>
      </Head>
      <div className={style.homePage}>
        <div className="container">
          <div className={style.homeTitle}>
            <h1>Main Page</h1>
          </div>
          <div className={style.homeImage}>
            <Image
              src="/burger-10909.png"
              alt="main burger"
              width={400}
              height={300}
            />
          </div>
          <div className={style.homeText}>
            <p>Choose your Burger</p>
            <Link href="/burgers">
              <a className={style.homeButton}>Burgers</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;