import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Box } from '@mui/material';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';

export function UserMenu() {
  const { user } = useAuth();
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        marginLeft: 130,
        px: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 5,
      }}
    >
      <Box>
        <Typography variant="h5">Welcome</Typography>
        <Typography variant="subtitle2">{user.name}</Typography>
      </Box>
      <Button
        variant="contained"
        sx={{
          ':hover': { bgcolor: 'secondary.light' },
        }}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Box>
  );
}
