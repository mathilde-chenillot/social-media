/* eslint-disable linebreak-style */
import {
  Box,
} from '@mui/material';
import Post from './Post';

export function Feed() {
  return (
    <Box flex={4} p={2}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
}

export default Feed;
