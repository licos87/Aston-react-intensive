import { NavLink } from 'react-router-dom';

import pageNotFoundImage from '../assets/blue-monday.png';
import cls from './NotFoundPage.module.css';

function NotFoundPage() {
  return (
    <>
      <div className="page page--gray page--main">
        <div className={cls.pageNotFoundContainer}>
          <div className={cls.imgContainer}>
          <img
            src={pageNotFoundImage}
            width="545"
            height="545"
            alt="Page Not Found Image"
          />
          </div>
          <h2 className={cls.pageNotFoundTitle}>404</h2>
          <p className={cls.pageNotFoundText}>Uh oh, something looks wrong here</p>
          <NavLink className={cls.pageNotFoundBtn} tabIndex={1} to="/">Home</NavLink>
        </div>
      </div>
    </>
  );
}

export default NotFoundPage;

