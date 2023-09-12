import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
  styled,
} from '@mui/material';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import VideocamIcon from '@mui/icons-material/Videocam';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DateRangeIcon from '@mui/icons-material/DateRange';

export const Add = () => {
  const StyledModal = styled(Modal)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  });

  const UserBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  });

  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={() => setOpen(true)}
        title="Add"
        sx={{
          position: 'fixed',
          bottom: 20,
          left: { xs: 'calc(50% - 25px)', md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal open={open} onClose={() => setOpen(false)}>
        <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={1}>
          <Typography variant="h6" color="grey" textAlign="center">
            Create post
          </Typography>
          <UserBox>
            <Avatar src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6" />
            <Typography fontWeight={500} ml={1}>
              John Doe
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: '100%' }}
            id="standard-multiline-static"
            multiline
            rows={4}
            placeholder="Post something here"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotionsIcon color="primary" />
            <CameraAltIcon color="secondary" />
            <VideocamIcon color="success" />
            <PersonAddIcon color="error" />
          </Stack>
          <ButtonGroup
          fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{width: '100px'}}>
              <DateRangeIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};
