import Container from '@material-ui/core/Container';
import Image from 'next/image';
import about from '../public/about.svg';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Head from 'next/head';

const useStyles = makeStyles((theme) => ({
    content : {
      
        display : 'flex',
        alignItems: 'center',
        justifyContent : 'space-between'
       
    },
    whoarewe : {
        width: '40%'
    },

}))

const About = () => {
    const classes = useStyles();
    return ( 
        <>
        <Head>
        <title>Rxpress | About</title>
        <meta name = 'keywords' content = 'rxpress'></meta>
      </Head>
        <Container maxWidth = 'lg'>
            <div  className = 'about-content'>
            <div className = {classes.whoarewe}>
                  <h1>Who are we ?</h1>
                  <p>Rxpress ผู้ที่ทำให้คุณสามารถซื้อยาได้โดยไม่ต้องเดินทางด้วยเทคโนโลยี Telepharmacy คุณสามารถพูดคุยกับเภสัชกรของเรา เพื่อซักถามอาการ จากนั้นยาจะถูกจัดส่งจากร้านขายยาใกล้บ้านคุณ ไปยังที่อยู่ที่คุณระบุไว้อย่างรวดเร็วที่สุด</p>
                  
              </div>
              <Image src = {about} alt = 'aboutus' width = '500' height = '500' />
            </div>
             
        </Container>
         </> 
     );
}
 
export default About;