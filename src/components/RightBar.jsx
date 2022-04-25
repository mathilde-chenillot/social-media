/* eslint-disable linebreak-style */
import { Box } from '@mui/material';

export function RightBar() {
  return (
    <Box
      flex={2}
      p={2}
      sx={{ display: { xs: 'none', sm: 'block' } }}
    >
      <Box position="fixed">
        RightBar
      </Box>
    </Box>
  );
}

export default RightBar;
