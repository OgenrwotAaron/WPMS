import React from 'react';
import { makeStyles, Typography } from '@material-ui/core'
import MaterialTable from 'material-table';

import icons from '../../common/tableIcons';
import data from '../../common/attendantsData.json';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(4)
    },
}));

const Attendants = props => {

    const { history } = props

    const classes = useStyles()

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
                title:'Phone',
                field:'phone',
                render:rowData=><Typography>{rowData.phone}</Typography>
            },
            {
                title:'Cluster',
                field:'cluster',
                render:rowData=><Typography>{rowData.cluster}</Typography>
            }
        ]
    }

    const handleRowClick = (event,rowData) =>{
        history.push(`/cluster/${rowData.cluster}`)
    }

    return ( 
        <div className={classes.root}>
            <MaterialTable
                title='Water Points'
                columns={state.columns}
                data={data}
                icons={icons}
                onRowClick={handleRowClick}
                editable={{
                    onRowDelete:oldData=>
                        new Promise((resolve,reject)=>{
                            console.log(oldData)
                            resolve()
                        }),
                    onRowAdd:newData=>
                        new Promise((resolve,reject)=>{
                            console.log(newData)
                            resolve()
                        }),
                    onRowUpdate:(newData,oldData)=>
                        new Promise((resolve,reject)=>{
                            console.log(newData)
                            resolve()
                        })
                }}
                options={{
                    pageSizeOptions:[5,10,20,30,50],
                    pageSize:5
                }}
                style={{padding:'0 40px'}}
            />
        </div>
     );
}
 
export default Attendants;