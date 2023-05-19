import { Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';

export const AuthNav = () => {
  return (
    <Box sx={{ gap: 5, display: 'flex' }}>
      <Link component={RouterLink} to="/register">
        Register
      </Link>
      <Link component={RouterLink} to="/login">
        Log In
      </Link>
    </Box>
  );
};
