import { useAuth } from 'hooks/useAuth';
import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box>
      {isLoggedIn ? (
        <Button
          variant="contained"
          sx={{
            ':hover': { bgcolor: 'secondary.light' },
          }}
          component={NavLink}
          to="/contacts"
        >
          Phonebook
        </Button>
      ) : (
        <Button
          variant="contained"
          sx={{
            ':hover': { bgcolor: 'secondary.light' },
          }}
          component={NavLink}
          to="/"
        >
          Home
        </Button>
      )}
    </Box>
  );
};
