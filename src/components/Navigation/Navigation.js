import { useAuth } from 'hooks/useAuth';
import { Box } from '@mui/material';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box>
      {isLoggedIn ? (
        <Link component={RouterLink} to="/contacts">
          Phonebook
        </Link>
      ) : (
        <Link component={RouterLink} to="/">
          Home
        </Link>
      )}
    </Box>
  );
};
