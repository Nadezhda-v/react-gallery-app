import style from './Main.module.css';
import Layout from '../Layout';
import List from './List';
import { Route, Routes } from 'react-router-dom';
// import Modal from '../Modal';
// <Route path='image/:id' element={<Modal />} />
// import PageError from '../PageError';
// <Route path='*' element={<PageError />} />

export const Main = () => (
  <main className={style.main}>
    <Layout>
      <Routes>
        <Route path='/' element={<List />} />
        <Route path='/gallery' element={<List />}>
        </Route>
      </Routes>
    </Layout>
  </main>
);
