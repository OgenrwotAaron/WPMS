import React, { forwardRef } from 'react';
import { makeStyles, Typography, Chip } from '@material-ui/core'
import MaterialTable from 'material-table';

import SearchIcon from '@material-ui/icons/Search';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import ChevronLeftOutlinedIcon from '@material-ui/icons/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';
import LastPageOutlinedIcon from '@material-ui/icons/LastPageOutlined';
import FirstPageOutlinedIcon from '@material-ui/icons/FirstPageOutlined';
import DoneOutlinedIcon from '@material-ui/icons/DoneOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import theme from 'theme';

const icons={
    Search: forwardRef((props,ref) => <SearchIcon {...props} ref={ref}/>),
    ResetSearch: forwardRef((props,ref)=><HighlightOffOutlinedIcon {...props} ref={ref}/>),
    Delete:forwardRef((props,ref)=><DeleteOutlineOutlinedIcon {...props} ref={ref}/>),
    PreviousPage:forwardRef((props,ref)=><ChevronLeftOutlinedIcon {...props} ref={ref}/>),
    NextPage:forwardRef((props,ref)=><ChevronRightOutlinedIcon {...props} ref={ref}/>),
    FirstPage:forwardRef((props,ref)=><FirstPageOutlinedIcon {...props} ref={ref}/>),
    LastPage:forwardRef((props,ref)=><LastPageOutlinedIcon {...props} ref={ref}/>),
    Check:forwardRef((props,ref)=><DoneOutlinedIcon {...props} ref={ref}/>),
    Clear:forwardRef((props,ref)=><CloseOutlinedIcon {...props} ref={ref}/>),
    SortArrow:forwardRef((props,ref)=><ImportExportIcon {...props} ref={ref}/>),
    Add:forwardRef((props,ref)=><AddOutlinedIcon {...props} ref={ref} />)
};

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(4)
    },
  }));

const Points = props => {

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
                lookup: { 0: 'Tegwana', 1: 'Layibi', 2: 'Unyama', 3: 'Koch' },
                render:rowData=><Typography>{rowData.cluster}</Typography>
            },
            {
                title:'Status',
                field:'status',
                lookup: { 0: 'Functional', 1: 'Not Functional', 2: 'Needs Repair' },
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
        ],
        data:[
            {
                id:'B0001',
                cluster:'Tegwana',
                status:'Functional',
                location:'2.77,32.28'
            },
            {
                id:'B0002',
                cluster:'Ariaga',
                status:'Needs Repair',
                location:'2.78,32.18'
            },
            {
                id:'B0003',
                cluster:'Kasubi',
                status:'Not Functional',
                location:'2.67,31.28'
            }
        ]
    }

    return ( 
        <div className={classes.root}>
                <MaterialTable
                    title='Water Points'
                    columns={state.columns}
                    data={state.data}
                    icons={icons}
                    editable={{
                        onRowDelete:oldData=>
                            new Promise((resolve,reject)=>{
                                console.log(oldData)
                                resolve()
                            }),
                        onRowAdd:newData =>
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