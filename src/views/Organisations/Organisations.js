import React, { forwardRef, useState} from 'react';
import { makeStyles, Snackbar, Typography, Button, Chip, Switch } from '@material-ui/core';
import MaterialTable from 'material-table';
import theme from 'theme';

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
import { Alert } from '@material-ui/lab';

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
                    <Typography><Button href={`/organisation/${rowData.name}`} size='small' style={{borderRadius:'25px'}} >{rowData.name}</Button></Typography>
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
        data:[
            {
                name:'Save the Children',
                clusters:'Tegwana, Laliya, Layibi',
                email:'savethechildren@save.com',
                type:'N.G.O',
                confirm:true,
                access:'Active',
            },
            {
                name:'World Vision',
                clusters:'Kasubi,Lawiyadul,Unyama',
                email:'worldvision@vision.com',
                type:'N.G.O',
                confirm:false,
                access:'Pending',
            },
            {
                name:'USAID',
                clusters:'Lacor,KatiKati',
                email:'usaid@aid.com',
                type:'Government',
                confirm:false,
                access:'InActive',
            }
        ]
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
                data={state.data}
                columns={state.columns}
                editable={{
                    onRowDelete:oldData=>
                        new Promise((resolve,reject)=>{
                            setOpen({
                                ...open,
                                success:true
                            })
                            resolve()
                        })
                }}
            />
            <Snackbar open={open.success} onClose={handleClose} autoHideDuration={3000}>
                <Alert severity='success' elevation={6} variant='filled' onClose={handleClose}>
                    <Typography style={{color:'white'}}>Organisation Deleted Sucessfully</Typography>
                </Alert>
            </Snackbar>
        </div>
     );
}
 
export default Organisations;