import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

function Home() {
  return (
    <Box sx={{ my: 16, textAlign: 'center' }}>
      <Typography variant="h1" sx={{ m: 3 }}>
        To access phonebook please log in or register
      </Typography>
    </Box>
  );
}

export default Home;
