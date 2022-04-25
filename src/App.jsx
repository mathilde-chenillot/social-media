import { Button, styled, Typography } from '@mui/material';
import './App.css'
import { Add, Settings } from '@mui/icons-material';

function App() {
  
  // styled component mui
    const BlueButton = styled(Button)(({theme})=>({
      backgroundColor: theme.palette.otherColor,
      color: "#888",
      margin: 5,
      "&:hover": {
        backgroundColor: "lightblue"
      },
      "&:disabled": {
        backgroundColor: "gray",
        color: "white",
      }
    }));

  return (
    <div className="App">
      I hope to be integrated in On Pace please \o/
      <Button variant="text">Text</Button>
      <Button
        startIcon={ <Settings /> }
        variant="contained"
        color="secondary"
        size="small"
        >
         Settings
         </Button>
      <Button color="success" startIcon={ <Add /> } variant="outlined">Add new post</Button>
      <Typography variant="h1" component="h2">
        h1. Heading
      </Typography>
      <BlueButton>
        My button
      </BlueButton>
    </div>
  )
}

export default App
