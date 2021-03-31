import { IconButton, Paper, Typography } from "@material-ui/core";
import React from "react";
import pic from "../assets/profile_pic.jpeg";
import { makeStyles } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import MailIcon from "@material-ui/icons/Mail";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import Box from "@material-ui/core/Box";
import resumeData from "../utils/resumeData";

const useStyles = makeStyles({
  img: {
    width: "100%",
  },
  profile_info: {
    lineHeight: "1.1rem",
    padding: "1.2rem",
  },
  name: {
    textTransform: "uppercase",
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "0.9rem",
    color: "#777",
    padding:"0.2rem"
  },
  infoDetails: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flexStart",
    
  },
  icons: {
    verticalAlign: "middle",
    padding : "0.3rem",
    color:"#967bb6"
  }
});
const Profile = () => {
  const classes = useStyles();
  return (
    <Box m={1} p={1}>
      <Paper>
        <div className="profile_container">
          <div>
            <img src={pic} alt="Photos" className={classes.img} />
          </div>

          <div className={classes.profile_info}>
            <Typography className={classes.name}>{resumeData.name}</Typography>
            <Typography className={classes.subtitle}>
              {resumeData.title}
            </Typography>
          </div>

          <div>
            <IconButton className={classes.icons}>
              <HomeIcon />
              <span className={classes.subtitle}>{resumeData.address}</span>
            </IconButton>
            <IconButton className={classes.icons}>
              <MailIcon />
              <Typography className={classes.subtitle}>{resumeData.email}</Typography>
            </IconButton>
            <IconButton className={classes.icons}>
              <PhoneAndroidIcon />
              <Typography className={classes.subtitle}>{resumeData.phone}</Typography>
            </IconButton>
          </div>
        </div>
      </Paper>
    </Box>
  );
};

export default Profile;
