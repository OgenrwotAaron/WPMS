import React, { useState} from 'react';
import { makeStyles, Paper, Typography, Grid, Hidden, TextField, MenuItem, Button, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const locations = [
    {value:'gulu',label:'Gulu'},
    {value:'kitgum',label:'Kitgum'},
    {value:'kampala',label:'Kampala'},
    {value:'mukono',label:'Mukono'}
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

const AddEngineer = props => {

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

    const handleAddEngineer = () =>{
        setOpen({
            ...open,
            success:true
        })
    }

    return ( 
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Typography variant='h3'>Add Engineer</Typography>
                <Grid container>
                    <Hidden xsDown>
                        <Grid item sm={4}>
                            <img style={{width:'100%'}} src='/images/products/addEngineer.svg' alt='add-point' />
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
                                label='Email'
                                type='email'
                                variant='outlined'
                            />
                            <TextField
                                className={classes.inputs}
                                label='Designation'
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
                                name='District'
                                label='Choose District'
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
                            <Button onClick={handleAddEngineer} variant='contained' color='secondary'>Add Engineer</Button>
                        </form>
                    </Grid>
                </Grid>
            </Paper>
            <Snackbar open={open.success} autoHideDuration={3000} onClose={handleClose}>
                <Alert severity='success' elevation={6} onClose={handleClose} variant='filled'>
                    <Typography style={{color:'white'}}>Engineer Added Successfully</Typography>
                </Alert>
            </Snackbar>
        </div>
     );
}
 
export default AddEngineer;