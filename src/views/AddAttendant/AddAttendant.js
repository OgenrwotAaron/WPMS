import React, { useState } from 'react';
import { makeStyles, Paper, Typography, Grid, Hidden, TextField, MenuItem, Button, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const locations = [
    {value:'tegwana',label:'Tegwana'},
    {value:'agwee',label:'Agwee'},
    {value:'laliya',label:'Laliya'},
    {value:'kasubi',label:'Kasubi'}
]

const useStyles = makeStyles(theme=>({
    root:{
        padding:theme.spacing(4)
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
}))

const AddAttendant = props => {

    const classes = useStyles()

    const [ open, setOpen ] = useState({
        success:false,
        error:false
    })

    const handleClose = () =>{
        setOpen({
            ...open,
            success:false
        })
    }

    const handleAddAttendant = () =>{
        setOpen({
            ...open,
            success:true
        })
    }

    return ( 
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Typography variant='h3'>Add Water Point Attendant</Typography>
                <Grid container>
                    <Hidden xsDown>
                        <Grid item sm={4}>
                            <img style={{width:'100%'}} src='/images/products/addAttendant.svg' alt='add-point' />
                        </Grid>
                        <Grid item sm={2}></Grid>
                    </Hidden>
                    <Grid item sm={6} xs={12}>
                        <form className={classes.form}>
                            <TextField
                                className={classes.inputs}
                                label='Fullname'
                                type='text'
                                variant='outlined'
                            />
                            <TextField
                                className={classes.inputs}
                                label='Phone'
                                type='tel'
                                variant='outlined'
                            />
                            <TextField
                                className={classes.inputs}
                                variant='outlined'
                                name='Cluster'
                                label='Choose cluster'
                                select
                            >
                                {
                                    locations.map((item,i)=>(
                                        <MenuItem key={i} value={item.value}>
                                            {item.label}
                                        </MenuItem>
                                    ))
                                }
                            </TextField>
                            <Button variant='contained' color='secondary' onClick={handleAddAttendant}>
                                Add Attendant
                            </Button>
                        </form>
                    </Grid>
                </Grid>
            </Paper>
            <Snackbar open={open.success} autoHideDuration={3000} onClose={()=>handleClose('success')}>
                <Alert elevation={6} variant='filled' severity='success' onClose={()=>handleClose('success')}>
                    <Typography style={{color:'white'}}>
                        Attendant Added Successfuly
                    </Typography>
                </Alert>
            </Snackbar>
        </div>
     );
}
 
export default AddAttendant;