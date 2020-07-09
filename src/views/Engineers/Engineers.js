import React, { forwardRef, useState} from 'react';
import { makeStyles, Typography, Button, Snackbar } from '@material-ui/core';
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
    },
}))

const Engineers = props => {

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
                render:rowData=><Typography><Button href={`/district/${rowData.district}`} size='small' style={{borderRadius:'25px'}} >{rowData.district}</Button></Typography>
            }
        ],
        data:[
            {
                name:'Mark Opiyo',
                designation:'District Engineer',
                email:'markopiyo@water.com',
                district:'gulu',
                phone:'+256712345678'
            },
            {
                name:'John Mugenyi',
                designation:'District Water Engineer',
                email:'johnmugenyi@water.com',
                district:'mbale',
                phone:'+256712678345'
            },
            {
                name:'Allan Okot',
                designation:'Assistant District Water Engineer',
                email:'allanokot@water.com',
                district:'kagadi',
                phone:'+256745612378'
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
                title='Water Engineers'
                columns={state.columns}
                data={state.data}
                icons={icons}
                editable={{
                    onRowDelete:oldData =>
                        new Promise((resolve,reject)=>{
                            setOpen({
                                ...open,
                                success:true
                            })
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