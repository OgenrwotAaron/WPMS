import React, { useState} from 'react';
import { makeStyles, Typography, Snackbar } from '@material-ui/core';
import MaterialTable from 'material-table';
import { Alert } from '@material-ui/lab'

import icons from '../../common/tableIcons'
import data from '../../common/engineersData.json'

const useStyles = makeStyles(theme=>({
    root:{
        padding:theme.spacing(4)
    },
}))

const Engineers = props => {

    const { history } = props

    const classes = useStyles()

    const [ open, setOpen ] = useState({
        success:false,
        error:false
    })

    //name
    //district
    //email
    //phone
    //designation

    const state= {
        columns:[
            {
                title:'Fullame',
                field:'name',
                render:rowData=>(
                    <Typography>{rowData.name}</Typography>
                )
            },
            {
                title:'Designation',
                field:'designation',
                render:rowData=><Typography>{rowData.designation}</Typography>
            },
            {
                title:'Email',
                field:'email',
                render:rowData=><Typography>{rowData.email}</Typography>
            },
            {
                title:'Phone',
                field:'phone',
                render:rowData=><Typography>{rowData.phone}</Typography>
            },
            {
                title:'District',
                field:'district',
                render:rowData=><Typography>{rowData.district}</Typography>
            }
        ],
    }

    const handleClose = () =>{
        setOpen({
            ...!open
        })
    }

    const handleRowClick = (event,rowData) =>{
        history.push(`/district/${rowData.district}`)
    }

    return ( 
        <div className={classes.root}>
            <MaterialTable
                title='Water Engineers'
                columns={state.columns}
                data={data}
                icons={icons}
                onRowClick={handleRowClick}
                editable={{
                    onRowDelete: oldData =>
                        new Promise((resolve,reject)=>{
                            setOpen({
                                ...open,
                                success:true
                            })
                            resolve()
                        }),
                    onRowAdd:newData => 
                        new Promise((resolve,reject)=>{
                            console.log(newData)
                            resolve()
                        }),
                    onRowUpdate:(newData,oldData) =>
                        new Promise((resolve,reject)=>{
                            console.log(oldData)
                            resolve()
                        })
                }}
            />
            <Snackbar open={open.success} autoHideDuration={3000} onClose={handleClose}>
                <Alert elevation={6} variant='filled' severity='success' onClose={handleClose}>
                    <Typography style={{color:'white'}}>Deleted Successfully</Typography>
                </Alert>
            </Snackbar>
        </div>
     );
}
 
export default Engineers;