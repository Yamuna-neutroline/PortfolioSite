import React from "react";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import { Box, IconButton, Paper, Typography } from "@material-ui/core";
import { Header, PaperContainer, Subheader, Description_content } from "./Interests";
import resumeData from "../utils/resumeData";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  subHeader: {
    margin: "2px",
  },
});
const Education = () => {
  const classes = makeStyles();
  return (
    <Box my={1} p={1}>
      <Paper>
        <IconButton>
          <MenuBookIcon style={{color: "#967bb6"}}/> <Header>Education</Header>
        </IconButton>
        <PaperContainer>
          {resumeData.education.map((item) => (
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
              
              <hr />
            </>
          ))}
        </PaperContainer>
      </Paper>
    </Box>
  );
};

export default Education;
