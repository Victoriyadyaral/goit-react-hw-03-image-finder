import { FaSpinner } from 'react-icons/fa';
import s from './ImagePendingView.module.css';

export default function ImagePendingView() {
  return (
    <div role="alert">
      <div className={s.spinner}>
        <FaSpinner size="150" className={s.iconSpin} />
        Loading...
      </div>
    </div>
  );
}