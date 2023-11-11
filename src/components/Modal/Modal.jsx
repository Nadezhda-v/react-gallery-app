import style from './Modal.module.css';
import ReactDOM from 'react-dom';
// import { useState } from 'react';
import { usePhoto } from '../../hooks/usePhoto';
import PhotoDetail from './PhotoDetail';
import Preloader from '../../UI/Preloader';
import { useNavigate, useParams } from 'react-router-dom';
import { ReactComponent as BackIcon } from './img/back.svg';

export const Modal = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [photoData, status] = usePhoto(id);

  const handleButtonBack = () => {
    navigate('/gallery');
  };

  return ReactDOM.createPortal(
    <div className={style.overlay} >
      <div className={style.modal}>
        {status === 'loading' && (
          <Preloader color={'#5c5c5c'} size={40} />
        )}
        {status === 'error' && (
          <p className={style.text}>
            Возникла ошибка при загрузке фотографии
          </p>
        )}
        {status === 'loaded' && (
          <>
            <PhotoDetail data={photoData} />
            <button className={style.back} onClick={handleButtonBack}>
              <BackIcon />
            </button>
          </>
        )}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};
