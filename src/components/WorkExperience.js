import { Box, IconButton, Paper, Typography } from '@material-ui/core'
import React from 'react'
import WorkIcon from '@material-ui/icons/Work';
import {Header, PaperContainer, Subheader, Description_content} from './Interests';
import resumeData from '../utils/resumeData';


const WorkExperience = () => {
    return (
        <Box my={1} p={1}>
        <Paper>
           <IconButton>
                <WorkIcon style={{color: "#967bb6"}}/> <Header>Work Experience</Header>
           </IconButton> 
           <PaperContainer>
           {resumeData.experiences.map((item) => (
            <>
            <Description_content>
            <Typography><Subheader>{item.title}</Subheader></Typography>
            </Description_content>
              <Description_content>
              <Typography>{item.date}</Typography>
              </Description_content>
              <Description_content>
              <Typography>{item.description}</Typography>
              </Description_content>
              
              
            </>
          ))}
            </PaperContainer>
           
        </Paper>
        </Box>
    )
}

export default WorkExperience
