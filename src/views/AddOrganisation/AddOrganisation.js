import React, { useState } from 'react';
import { Paper, makeStyles,Typography, Grid, Hidden, TextField, MenuItem, Button, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const types = [
    {value:'government',label:'Government'},
    {value:'ngo',label:'NGO'},
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

const AddOrganisation = props => {

    const classes = useStyles()

    const [ open, setOpen ] = useState({
        success:false,
        error:false
    })

    const hanldeAddOrganisation = () =>{
        setOpen({
            ...open,
            success:true
        })
    }

    const handleClose = () =>{
        setOpen({
            ...!open
        })
    }

    return ( 
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Typography variant='h3'>Add Engineer</Typography>
                <Grid container>
                    <Hidden xsDown>
                        <Grid item sm={4}>
                            <img style={{width:'100%'}} src='/images/products/addOrganisation.svg' alt='add-point' />
                        </Grid>
                        <Grid item sm={2}></Grid>
                    </Hidden>
                    <Grid item xs={12} sm={6}>
                        <form className={classes.form}>
                            <TextField
                                className={classes.inputs}
                                label='Organisation Name'
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
                                variant='outlined'
                                name='type'
                                label='Choose Organisation Type'
                                select
                            >
                                {
                                    types.map((item,i)=>(
                                        <MenuItem key={i} value={item.value}>
                                            {item.label}
                                        </MenuItem>
                                    ))
                                }
                            </TextField>
                            <TextField
                                className={classes.inputs}
                                label="Description"
                                multiline
                                rows={4}
                                defaultValue="Organisation Description"
                                variant="outlined"
                            />
                            <Button variant='contained' color='secondary' onClick={hanldeAddOrganisation}>
                                Add Organisation
                            </Button>
                        </form>
                    </Grid>
                </Grid>
            </Paper>
            <Snackbar open={open.success} onClose={handleClose} autoHideDuration={3000}>
                <Alert variant='filled' onClose={handleClose} elevation={6} severity='success'>
                    <Typography style={{color:'white'}}>Organisation Added Successfully</Typography>
                </Alert>
            </Snackbar>
        </div>
     );
}
 
export default AddOrganisation;