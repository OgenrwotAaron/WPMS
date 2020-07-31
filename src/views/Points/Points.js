import React from 'react';
import { makeStyles, Typography, Chip } from '@material-ui/core'
import MaterialTable from 'material-table';

import theme from 'theme';

import icons from '../../common/tableIcons'
import data from '../../common/pointData.json'

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(4)
    },
  }));

const Points = props => {

    const { history } = props

    const classes = useStyles()
//constituency,
//status,
//borehole_id
//location(latlong)
    const state= {
        columns:[
            {
                title:'BID',
                field:'id',
                editable: 'onUpdate',
                // render:rowData=>(
                //     <Typography>{rowData.cluster}</Typography>
                // ),
            },
            {
                title:'Cluster',
                field:'cluster',
                lookup: { 'Tegwana': 'Tegwana', 'Layibi': 'Layibi', 'Unyama': 'Unyama', 'Koch': 'Koch','Kasubi':'Kasubi' },
                render:rowData=><Typography>{rowData.cluster}</Typography>
            },
            {
                title:'Status',
                field:'status',
                lookup: { 'Functional': 'Functional', 'Not Functional': 'Not Functional', 'Needs Repair': 'Needs Repair' },
                initialEditValue:'Functional',
                render:rowData=>(
                    <Chip 
                        label={rowData.status} 
                        style={{
                            backgroundColor:rowData.status === 'Functional' ? 
                                '#66bb6a80'
                            :rowData.status === 'Needs Repair' ?
                                '#ffa72680'
                            :'#ea524f80',
                            color:rowData.status === 'Functional' ? 
                                theme.palette.success.dark
                            :rowData.status === 'Needs Repair' ?
                                theme.palette.warning.dark
                            :theme.palette.error.dark
                        }}
                        size='small' 
                    />
                )
            },
            {
                title:'Location(lat,long)',
                field:'location',
                render:rowData=><Typography>{rowData.location}</Typography>
            }
        ]
    }

    const handleRowClick = (event,rowData) =>{
        history.push(`/view-point/${rowData.id}`)
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
                        onRowDelete:(newData,oldData)=>
                            new Promise((resolve,reject)=>{
                                console.log(oldData)
                                resolve()
                            }),
                        onRowAdd:newData =>
                            new Promise((resolve,reject)=>{
                                console.log(newData)
                                resolve()
                            }),
                        onRowUpdate:newData=>
                            new Promise((resolve,reject)=>{
                                console.log(newData)
                                resolve()
                            })
                    }}
                    options={{
                        pageSizeOptions:[5,10,20,30,50],
                        pageSize:10
                    }}
                    style={{padding:'0 40px'}}
                />
        </div>
     );
}
 
export default Points;