import { Box, IconButton, Paper, Typography } from '@material-ui/core'
import React from 'react'
import AssignmentIcon from '@material-ui/icons/Assignment';
import {Header, PaperContainer, Subheader, Description_content} from './Interests';
import resumeData from '../utils/resumeData';

const Projects = () => {
    return (
        <Box my={1} p={1}>
        <Paper>
            <IconButton>
                <AssignmentIcon style={{color: "#967bb6"}}/> <Header>Projects</Header>
            </IconButton>
            <PaperContainer>
                {resumeData.projects.map((project)=>(
                    <>
                    <Description_content>
                    <Typography><Subheader>{project.title}</Subheader></Typography>
                    </Description_content>
                    <Description_content>
                    <Typography>{project.technology}</Typography>
                    </Description_content>
                    <Description_content>
                    <Typography>{project.description}</Typography>
                    </Description_content>
                    


                    </>
                ))}
            </PaperContainer>
        </Paper>
      
        </Box>
    )
}

export default Projects
