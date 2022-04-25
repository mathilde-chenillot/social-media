/* eslint-disable linebreak-style */
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab, Modal, Stack, TextField, Tooltip, Typography,
} from '@mui/material';
import {
  Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack,
} from '@mui/icons-material'; // because Add is the name of the component
import { useState } from 'react';
import styled from '@emotion/styled';

const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const UserBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '20px',
});

function Add() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* + button to open modal */}
      <Tooltip
        onClick={() => setOpen(true)}
        title="Add"
        sx={{
          position: 'fixed',
          bottom: 20,
          left: { xs: 'calc(50%-25px)', md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>

      {/* Modal */}
      <StyledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor="white" p={3} borderRadius={4}>
          {/* Title */}
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>

          {/* User's avatar + name */}
          <UserBox>
            <Avatar
              src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500} variant="span">
              Mathilde Doe
            </Typography>
          </UserBox>

          {/* Text area */}
          <TextField
            sx={{ width: '100%' }}
            id="standard-multiline-static"
            // label="Multiline"
            multiline
            rows={3}
            placeholder="What's on your mind ?"
            variant="standard"
          />

          {/* Emoji for actions */}
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>

          {/* Button to post and select date */}
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: '100px' }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
}

export default Add;
