import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { AuthNav } from 'components/AuthNav/AuthNav';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';

export const AppBarMain = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar position="static" color="appbar">
      <Container maxWidth="xl">
        <Toolbar>
          <Box
            sx={{
              px: 0,
              display: 'flex',
              justifyContent: 'flex-start',
              gap: 5,
            }}
          >
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
