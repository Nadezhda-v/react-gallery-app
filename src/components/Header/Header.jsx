import style from './Header.module.css';
import Layout from '../Layout';
import Logo from '../Header/Logo';
import Auth from '../Header/Auth';

export const Header = () => (
  <header className={style.header}>
    <Layout>
      <div className={style.сontainer}>
        <Logo />
        <Auth />
      </div>
    </Layout>
  </header>
);
