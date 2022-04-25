/* eslint-disable linebreak-style */
import {
  Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography,
} from '@mui/material';

import datasFile from '../data';

export function RightBar() {
  const datas = datasFile[0];

  return (
    <Box
      flex={2}
      p={2}
      sx={{ display: { xs: 'none', sm: 'block' } }}
    >
      <Box position="fixed" width={300}>
        {/* Friends */}
        <Typography variant="h6" fontWeight={100} mb={2}>Online Friends</Typography>
        <AvatarGroup max={7}>
          {
            datas.friends.map((friend) => (
              <Avatar
                key={friend.id}
                alt={friend.alt}
                src={friend.src}
              />
            ))
          }
        </AvatarGroup>

        {/* Latest Photos */}
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>Latest Photos</Typography> {/* mb=margin-bottom */}
        <ImageList cols={3} rowHeight={100} gap={5}>
          {
            datas.latestPhotos.map((photo) => (
              <ImageListItem key={photo.id}>
                <img
                  src={photo.src}
                  alt={photo.alt}
                />
              </ImageListItem>

            ))
          }
        </ImageList>

        {/* Latest Conversations */}
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>Latest Conversations</Typography> {/* mb=margin-bottom */}
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {
            datas.conversations.map((conversation) => (
              <>
                <ListItem key={conversation.id} alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt={conversation.name} src={conversation.src} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={conversation.title}
                    secondary={(
                      <>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {conversation.name}
                        </Typography>
                        {conversation.message}
                      </>
                  )}
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </>
            ))
          }

        </List>
      </Box>
    </Box>
  );
}

export default RightBar;
