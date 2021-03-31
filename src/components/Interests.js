import React from 'react';
import styled from 'styled-components';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import { Box, IconButton, Paper, Typography } from '@material-ui/core';
import resumeData from '../utils/resumeData';

const Header = styled.section` 
font-size: 2rem;
color: black;
padding-left : 5px;

`;

const PaperContainer=styled.section`
padding: 1rem;

`;

const Subheader = styled.p`
font-size : 1.5rem;
color: #967bb6;
margin-bottom: 0px;

`;

const Description_content = styled.section`
font-size : 1 rem;
line-height: 1.2rem;
padding-bottom: 3px;

`;


const Interests = () => {
    return (
        <Box my={1} p={1}>
        <Paper>
            <IconButton>
                <SportsEsportsIcon style={{color: "#967bb6"}} /> <Header>Interests</Header>
            </IconButton>
            <PaperContainer>
            {resumeData.interests.map((interest)=>(
                <Description_content>
                <Typography><li>{interest}</li></Typography>
                </Description_content>
            ))}
            </PaperContainer>
            
        </Paper>
        </Box>
    )
}

export default Interests;
export {Header};
export {PaperContainer};
export {Subheader};
export {Description_content};

