import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SliderControl from './SliderControl';

const useStyles = makeStyles((theme)=>({
  container : {
    margin:10,
  }
}))


function Settings(props) {
    const classes = useStyles();
    return <Grid container>
        <Grid item md={12} className={classes.container}>
            <Typography variant='h4'>
                User Configuration
            </Typography>
        </Grid>

        <Grid item md={12}>
            <SliderControl  />
        </Grid>
        <Grid item md={12}>
            <SliderControl  />
        </Grid>
        <Grid item md={12}>
            <SliderControl  />
        </Grid>
        <Grid item md={12}>
            <SliderControl  />
        </Grid>
    </Grid>;
}

export default Settings;