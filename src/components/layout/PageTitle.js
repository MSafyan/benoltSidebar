import React from 'react'
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
const useStyles = makeStyles((theme) => ({
  mainDiv:{
    width:'100vw',
    display:'flex',
    alignItems:'start'
  },
  innerSpan:{
    display:'flex'
  }
}));

const PageTitle = ({list}) => {
  const classes=useStyles();

  return (
    <div className={classes.mainDiv}>

      {list && list.map((val,i)=>{
        return <Typography variant='body1' key={i} className={classes.innerSpan}>{val} {
          i==list.length-1 ? null:<ChevronRightIcon/>
        }</Typography>
      })}
    </div>
  )
}

export default PageTitle
