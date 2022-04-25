/* eslint-disable linebreak-style */
import {
  Avatar, AvatarGroup, Box, Typography,
} from '@mui/material';

import friendsDatas from '../data';

export function RightBar() {
  const { friends } = friendsDatas[0];

  return (
    <Box
      flex={2}
      p={2}
      sx={{ display: { xs: 'none', sm: 'block' } }}
    >
      <Box position="fixed">
        <Typography variant="h6" fontWeight={100}>Online Friends</Typography>
        <AvatarGroup max={7}>
          {
            friends.map((friend) => (
              <Avatar
                key={friend.id}
                alt={friend.alt}
                src={friend.src}
              />
            ))
          }
        </AvatarGroup>
      </Box>
    </Box>
  );
}

export default RightBar;
