import React, {useState} from 'react';
import { makeStyles, Snackbar, Typography, Button, Chip, Switch } from '@material-ui/core';
import MaterialTable from 'material-table';
import theme from 'theme';

import { Alert } from '@material-ui/lab';

import icons from '../../common/tableIcons'
import data from '../../common/organisationData.json'

const useStyles = makeStyles(theme=>({
    root:{
        padding:theme.spacing(4)
    }
}))

const Organisations = props => {

    const classes = useStyles()

    const [ open, setOpen ] = useState({
        success:false,
        error:false
    })

    const state= {
        columns:[
            {
                title:'Name',
                field:'name',
                render:rowData=>(
                    <Typography><Button href={`/organisation/${rowData.id}`} size='small' style={{borderRadius:'25px'}} >{rowData.name}</Button></Typography>
                )
            },
            {
                title:'Email',
                field:'email',
                render:rowData=><Typography>{rowData.email}</Typography>
            },
            {
                title:'Type',
                field:'type',
                render:rowData=><Typography>{rowData.type}</Typography>
            },
            {
                title:'Access',
                field:'access',
                render:rowData=>(
                    <Chip 
                        label={rowData.access} 
                        style={{
                            backgroundColor:rowData.access === 'Active' ? 
                                '#66bb6a80'
                            :rowData.access === 'Pending' ?
                                '#ffa72680'
                            :'#ea524f80',
                            color:rowData.access === 'Active' ? 
                                theme.palette.success.dark
                            :rowData.access === 'Pending' ?
                                theme.palette.warning.dark
                            :theme.palette.error.dark
                        }}
                        size='small' 
                    />
                )
            },
            {
                title:'Clusters',
                field:'clusters',
                render:rowData=><Typography>{rowData.clusters}</Typography>
            },
            {
                title:'Confirm',
                field:'confirm',
                render:rowData=><Switch
                    checked={rowData.confirm}
                    color='secondary'
                />
            },
        ],
    }

    const handleClose = () =>{
        setOpen({
            ...!open
        })
    }

    return ( 
        <div className={classes.root}>
            <MaterialTable
                title='Registered Organisations'
                icons={icons}
                data={data}
                columns={state.columns}
                editable={{
                    onRowDelete:oldData=>
                        new Promise((resolve,reject)=>{
                            setOpen({
                                ...open,
                                success:true
                            })
                            resolve()
                        }
                    ),
                    onRowAdd:oldData=>
                        new Promise((resolve,reject)=>{
                            setOpen({
                                ...open,
                                success:true
                            })
                            resolve()
                        }
                    ),
                    onRowUpdate:oldData=>
                        new Promise((resolve,reject)=>{
                            setOpen({
                                ...open,
                                success:true
                            })
                            resolve()
                        }
                    )
                }}
            />
            <Snackbar open={open.success} onClose={handleClose} autoHideDuration={3000}>
                <Alert severity='success' elevation={6} variant='filled' onClose={handleClose}>
                    <Typography style={{color:'white'}}>Sucess</Typography>
                </Alert>
            </Snackbar>
        </div>
     );
}
 
export default Organisations;