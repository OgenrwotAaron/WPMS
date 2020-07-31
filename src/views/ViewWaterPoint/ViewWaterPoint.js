import React, { useState, useEffect } from 'react';
import { makeStyles, Paper, Typography, TextField, MenuItem, Button, Grid, Snackbar } from '@material-ui/core'
import { PointMap } from './components';

import locations from '../../common/locations.json'
import points from '../../common/pointData.json'
import { Alert } from '@material-ui/lab';

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
    },
    pointMap:{
        width:'100%'
    }
}));

const ViewWaterPoint = props => {

    const { match:{params:{id}} } = props

    const classes = useStyles()

    const [point] = useState(...points.filter(point=>point.id===id));
    const [formData, setFormData] = useState({
        location:'',
        cluster:'',
        status:'',
        description:''
    });
    const [results, setResults] = useState({
        success:false,
        error:false
    });

    useEffect(() => {
        setFormData(prevState=>({...prevState,...point}))
    }, [point]);

    const handleChange = event =>{
        setFormData({
            [event.target.name]:event.target.value
        })
    }

    const handlePointUpdate = () =>{
        setResults({
            ...results,
            success:true
        })
    }

    const handleClose = () =>{
        setResults({
            ...!results
        })
    }

    return ( 
        <div className={classes.root}>
            <Paper className={classes.paper}>
            <Typography variant='h3'>Water Point: {id}</Typography>
                <Grid container>
                    <Grid item sm={4} xs={12}>
                        <PointMap className={classes.pointMap} cluster={formData.cluster} id={id} status={formData.status} coords={point.location}/>
                    </Grid>
                    <Grid item sm={2}></Grid>
                    <Grid item sm={6} xs={12}>
                    <form className={classes.form}>
                        {/* <Button onClick={openMapDialog} variant='outlined' color='secondary' className={classes.inputs}>Get Water Point Location From Map</Button> */}
                        <TextField
                            onChange={handleChange}
                            value={formData.location}
                            className={classes.inputs}
                            label='Enter Point Coordinates(Lat,Long)'
                            variant='outlined'
                            name='location'
                        />
                        <TextField
                            onChange={handleChange}
                            value={formData.cluster}
                            className={classes.inputs}
                            variant='outlined'
                            name='cluster'
                            label='Choose cluster'
                            helperText='Automatically got from the point coordinates'
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
                        <TextField
                            onChange={handleChange}
                            value={formData.status}
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
                            onChange={handleChange}
                            value={formData.description}
                            className={classes.inputs}
                            variant='outlined'
                            name='description'
                            label='Status Description'
                            multiline
                            rows={4}
                        />
                        <Button onClick={handlePointUpdate} variant='contained' color='secondary'>Update Water Point</Button>
                    </form>
                    </Grid>
                </Grid>
            </Paper>
            <Snackbar open={results.success} autoHideDuration={3000} onClose={handleClose}>
                <Alert severity='success' variant='filled' onClose={handleClose}>
                    <Typography style={{color:'white'}}>{id} Updated Successfully</Typography>
                </Alert>
            </Snackbar>
        </div>
     );
}
 
export default ViewWaterPoint;