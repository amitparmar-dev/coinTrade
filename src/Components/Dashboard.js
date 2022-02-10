import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme)=>({
    container : {
        backgroundColor: '#f0f0f0',
        width:"100%",
        height: "100vh"
    },
    header : {
        padding:10
    }
}))
export default function Dashboard() {
    const classes = useStyles();
    return (
        <Grid container >
            <Grid className={classes.header}>
                <Typography variant='h4'>
                    Dashboard
                </Typography>
            </Grid>
        </Grid>
    )
}
