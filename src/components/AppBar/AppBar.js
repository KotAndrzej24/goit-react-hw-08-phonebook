import { Navigation } from 'components/Navigation/Navigation';

export const AppBar = () => {
  //   const { isLoggedIn } = useAuth();

  return (
    <header>
      <Navigation />
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
    </header>
  );
};
