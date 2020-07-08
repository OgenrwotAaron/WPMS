import React, { forwardRef } from 'react';
import { makeStyles, Typography, Button } from '@material-ui/core'
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
    SortArrow:forwardRef((props,ref)=><ImportExportIcon {...props} ref={ref}/>)
};

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(4)
    },
}));

const Attendants = props => {

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
                render:rowData=><Typography><Button href={`/cluster/${rowData.cluster}`} size='small' style={{borderRadius:'25px'}} >{rowData.cluster}</Button></Typography>
            }
        ],
        data:[
            {
                name:'Mark Opiyo',
                cluster:'tegwana',
                phone:'+256712345678'
            },
            {
                name:'John Mugenyi',
                cluster:'kireka',
                phone:'+256712678345'
            },
            {
                name:'Allan Okot',
                cluster:'kasubi',
                phone:'+256745612378'
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
                            console.log('delete')
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
 
export default Attendants;