import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    if (
      e.target[0].value === '' ||
      e.target[2].value === '' ||
      e.target[4].value === ''
    ) {
      alert("Ups. You didn't fill the form");
    } else {
      dispatch(
        register({
          name: form.elements.name.value,
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      );
    }
    form.reset();
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: '#0097a7' }}>
        <AppRegistrationIcon sx={{ bgcolor: '#0097a7' }} />
      </Avatar>
      <Typography variant="h5">Register</Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ mt: 1, width: 533 }}
      >
        <TextField
          margin="normal"
          padding="normal"
          required
          fullWidth
          id="name"
          label="name"
          name="name"
          autoComplete="name"
          autoFocus
          color="secondary"
          sx={{ color: 'primary.main' }}
        />
        <TextField
          margin="normal"
          padding="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          color="secondary"
          sx={{ color: 'primary.main' }}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          color="secondary"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            mb: 2,
            bgcolor: 'secondary.main',
            ':hover': { bgcolor: 'secondary.light' },
          }}
        >
          Register
        </Button>
      </Box>
    </Box>
  );
};
