import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import css from './UserMenu.module.css';

export function UserMenu() {
  const { user } = useAuth();
  const dispatch = useDispatch();

  return (
    <div className={css.userMenuBox}>
      <h3>Welcome</h3>
      <p>{user.name}</p>

      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
}
