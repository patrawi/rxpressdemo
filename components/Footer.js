import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    footer : {
        position : 'absolute',
        bottom : 0,
        width: '100%',
        height: '2.5rem',
    }
       
}));


const Footer = () => {
    const classes = useStyles();
    return (
        <div className = 'footer'>Copyright 2021</div>
    )
}

export default Footer;