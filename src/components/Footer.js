import React from 'react'
import {IconButton, makeStyles} from "@material-ui/core"
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
    footer: {
        background: '#967bb6',
        width: '100%',
        height: '8vh',
        color: 'white',
        textAlign: 'center',
        lineHeight: '2rem',
        fontSize:'1.1rem'
    },
    icon: {
        
        color:'white',
        fontSize: '1.4rem',
        paddingRight: '2px'
      }
})
const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.footer}>
           
            <IconButton>
            <a href ="https://www.facebook.com/yamuna.adhikari.99/" target ="/"><FacebookIcon className ={classes.icon}  /></a>
               <a href ="https://www.instagram.com/_aamuna_/" target ="/"><InstagramIcon className ={classes.icon}  /></a>
               <a href ="https://www.linkedin.com/in/yamuna-adhikari-7b8806169/" target ="/"><LinkedInIcon className ={classes.icon}/></a>
               <a href ="https://github.com/amunaadh" target ="/"><GitHubIcon className ={classes.icon}/></a>
            </IconButton>
        </div>
    )
}

export default Footer
