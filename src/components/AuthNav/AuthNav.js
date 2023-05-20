import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

export const AuthNav = () => {
  return (
    <Box sx={{ gap: 5, display: 'flex' }}>
      <Button
        variant="contained"
        sx={{
          ':hover': { bgcolor: 'secondary.light' },
        }}
        component={NavLink}
        to="/register"
      >
        Register
      </Button>
      <Button
        variant="contained"
        sx={{
          ':hover': { bgcolor: 'secondary.light' },
        }}
        component={NavLink}
        to="/login"
      >
        Log In
      </Button>
    </Box>
  );
};
