import { Box, IconButton, Paper, Typography } from '@material-ui/core'
import React from 'react'
import ComputerIcon from '@material-ui/icons/Computer';
import {Header, PaperContainer, Subheader} from './Interests';
import resumeData from '../utils/resumeData';

const Skill = () => {
    return (
        <Box m={1} p={1}>
        <Paper>
            <IconButton>
                <ComputerIcon/>
             <Header>Skills</Header>
            </IconButton>
            <PaperContainer>
            <Typography><Subheader>Languages:</Subheader> {resumeData.skills.Languages}</Typography>
            <Typography><Subheader>Methodology:</Subheader> {resumeData.skills.Methodology}</Typography>
            <Typography><Subheader>Additional:</Subheader> {resumeData.skills.Additional}</Typography>
            <Typography><Subheader>Tools: </Subheader>{resumeData.skills.Tools}</Typography>
            </PaperContainer>


        </Paper>
  </Box>
        
    )
}

export default Skill
