import { Box, Stack } from '@mui/material';
import Add from './components/Add';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import RightBar from './components/RightBar';
import SideBar from './components/SideBar';

function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <SideBar />
        <Feed />
        <RightBar />
      </Stack>
      <Add />
    </Box>
  );
}

export default App;
