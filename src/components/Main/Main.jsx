import style from './Main.module.css';
import Layout from '../Layout';
import List from './List';
import { Route, Routes } from 'react-router-dom';
import Modal from '../Modal';
import NotFound from '../../pages/NotFound';

export const Main = () => (
  <main className={style.main}>
    <Layout>
      <Routes>
        <Route path='/' element={<List />} />
        <Route path='/gallery' element={<List />}>
          <Route path='photo/:id' element={<Modal />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  </main>
);
