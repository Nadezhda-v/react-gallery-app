import style from './Auth.module.css';
import urlAuth from '../../../api/auth';
import useAuth from '../../../hooks/useAuth';
import { deleteToken } from '../../../store/tokenReducer';
import { useDispatch } from 'react-redux';
import Preloader from '../../../UI/Preloader';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as LoginIcon } from './img/login.svg';
import { ReactComponent as LogoutIcon } from './img/logout.svg';

export const Auth = () => {
  const dispatch = useDispatch();
  const [loading, auth, clearAuth] = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(deleteToken());
    clearAuth();
    navigate('/');
  };

  return (
    <div className={style.container}>
      {loading ? (
        <Preloader color={'#4a4d7a'} size={40} />
      ) : auth.name ?
        (<div className={style.btn}>
          <img
            className={style.img}
            src={auth.image}
            title={auth.name}
            alt='Аватар'
          />

          <button
            className={style.logout}
            onClick={handleLogout}
          >
            <LogoutIcon className={style.svg} />
          </button>
        </div>) : (
        <a className={style.authLink} href={urlAuth}>
          <LoginIcon className={style.svg} />
        </a>
        )}
    </div>
  );
};
