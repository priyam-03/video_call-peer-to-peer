import React, { useState, useContext } from 'react';
import { Button, TextField, Grid, Typography, Container, Paper } from "@mui/material"
import { CopyToClipboard } from 'react-copy-to-clipboard';
// import { Assignment, Phone, PhoneDisabled } from '@material-ui/icons';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PhoneIcon from '@mui/icons-material/Phone';
import PhoneDisabledIcon from '@mui/icons-material/PhoneDisabled';


import { SocketContext } from '../Context';

const Options = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');
  

  return (
    <Container >
      <Paper elevation={10} >
        <form  noValidate autoComplete="off">
          <Grid container>
            <Grid item xs={12} md={6} >
              <Typography gutterBottom variant="h6">Account Info</Typography>
              <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
              <CopyToClipboard text={me} >
                <Button variant="contained" color="primary" fullWidth startIcon={<AssignmentIcon fontSize="large" />}>
                  Copy Your ID
                </Button>
              </CopyToClipboard>
            </Grid>
            <Grid item xs={12} md={6} >
              <Typography gutterBottom variant="h6">Make a call</Typography>
              <TextField label="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
              {callAccepted && !callEnded ? (
                <Button variant="contained" color="secondary" startIcon={<PhoneDisabledIcon fontSize="large" />} fullWidth onClick={leaveCall} >
                  Hang Up
                </Button>
              ) : (
                <Button variant="contained" color="primary" startIcon={<PhoneIcon fontSize="large" />} fullWidth onClick={() => callUser(idToCall)} >
                  Call
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
        {children}
      </Paper>
    </Container>
  );
};

export default Options;