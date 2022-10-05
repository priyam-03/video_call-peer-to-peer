import "./App.css";
import React from "react";
import Options from "./components/Options";
import VideoPlayer from "./components/VideoPlayer";
import Notifications from "./components/Notifictions";
import { Button, Typography, AppBar } from "@mui/material";

function App() {
  return (
    <div>
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          Video Chat
        </Typography>
      </AppBar>
      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
    </div>
  );
}

export default App;
