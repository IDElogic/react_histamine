import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import IconButton from '@material-ui/core/IconButton';

const Scroll = ({ 
    showBelow
}) => {
   
    const [show, setShow] = useState(showBelow ? false : true)
    
    const handleScroll = () => {
        if(window.pageYOffset > showBelow){
            if(!show) setShow(true)
        } else{
            if(show) setShow(false)
        }
    }

    useEffect(() => {
        if(showBelow){
            window.addEventListener(`scroll`, handleScroll)
            return () => window.removeEventListener(`scroll`, handleScroll)
        }
    })

    const handleClick = () => {
        window[`scrollTo`] ({
            top:0,
            behavoir: `smooth`
        })
    }

    const classes = makeStyles((theme) => ({
        toTop: {
            zIndex: 2,
            position: 'fixed',
            bottom: '2vh',
            backgroundColor: '#8bd600',
            color: 'black',
            [theme.breakpoints.up('xs')]: {
                right: '5%',
                backgroundColor: 'rgb(220,220,220,0.7)',
            },
            [theme.breakpoints.up('lg')]: {
                right: '6.5%',
            },
        }
    })
    )

  return(
    <div>
        {show && 
        <IconButton onClick={handleClick}  className={classes.toTop}>
            <ExpandLessIcon/>
        </IconButton>
        }
    </div>
  )
}

export default Scroll;

