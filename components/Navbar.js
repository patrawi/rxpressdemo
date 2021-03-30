import Link from 'next/link';
import Image from 'next/image';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';




const Navbar = () => {

  return (
    <AppBar  color = 'inherit' position = 'sticky' className = 'navbar' >
            <Grid container spacing = {1} alignItems = 'center' justify = "space-evenly">
                <Grid item xs = {6}>
                    <div className = 'logo'>
                        <h1>Rxpress</h1>
                    </div>
                </Grid>
                <Grid item xs = {1} >
                    <Link  href = '/' ><a>Home</a></Link>
                </Grid>
                <Grid item xs = {1} >
                    <Link href = '/about'><a>About</a></Link>
                </Grid>
            
            </Grid>
            
          
    
         
         
         
         
      
    </AppBar>
     
    
);
}
 
export default Navbar;