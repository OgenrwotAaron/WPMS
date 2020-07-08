import React from 'react';
import { makeStyles, Paper, Typography, TextField, MenuItem, Button, Grid, Hidden } from '@material-ui/core'

const status = [
    {value:'Functional',label:'Functional'},
    {value:'Non Functional',label:'Non Functional'},
    {value:'Needs Repair',label:'Needs Repair'}
]

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(4)
    },
    paper:{
        padding:theme.spacing(4),
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    form:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    },
    inputs:{
        margin: theme.spacing(1,0),
        width:'100%'
    }
}));

const WaterPointStatus = props => {

    const classes = useStyles()

    return ( 
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Typography variant='h3'>Water Point Status</Typography>
                <Grid container>
                    <Hidden xsDown>
                        <Grid item sm={4}>
                            <img style={{width:'100%'}} src='/images/products/addPointStatus.svg' alt='add-point' />
                        </Grid>
                        <Grid item sm={2}></Grid>
                    </Hidden>
                    <Grid item sm={6} xs={12}>
                    <form className={classes.form}>
                        <TextField
                            className={classes.inputs}
                            variant='outlined'
                            name='status'
                            label='Choose Status'
                            select
                        >
                            {
                                status.map((item,i)=>(
                                    <MenuItem key={i} value={item.value}>
                                        {item.label}
                                    </MenuItem>
                                ))
                            }
                        </TextField>
                        <TextField
                            className={classes.inputs}
                            variant='outlined'
                            name='description'
                            label='Status Description'
                            multiline
                            rows={4}
                        />
                        <Button variant='contained' color='secondary'>Add Water Point</Button>
                    </form>
                    </Grid>
                </Grid>
            </Paper>
        </div>
     );
}
 
export default WaterPointStatus;