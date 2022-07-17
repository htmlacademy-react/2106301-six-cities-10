import s from './404-page.module.css';
import { Link } from 'react-router-dom';

function Page404() {
  return(
    <div className={s.nfp}>
      <span className={s.nfp__span}>404. page not found</span>
      <Link to='/'>
        Go to Main Page
      </Link>
    </div>
  );
}

export default Page404;

