import { useNavigate } from 'react-router-dom';
import style from './NotFound.module.css';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className={style.container}>
      <section className={style.errorContainer}>
        <span className={style.four}>
          <span className={style.text}>4</span>
        </span>
        <span className={style.zero}>
          <span className={style.text}>0</span>
        </span>
        <span className={style.four}>
          <span className={style.text}>4</span>
        </span>
      </section>
      <div className={style.linkWrapper}>
        <a className={style.link} onClick={() => navigate('/gallery')}>
          Вернуться в галерею
        </a>
      </div>
    </div>
  );
};
