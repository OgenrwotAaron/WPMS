import React, { useState } from 'react';
import ReactMapGL, { NavigationControl, Popup } from 'react-map-gl'
import { makeStyles } from '@material-ui/styles';
import { ToggleButtonGroup, ToggleButton} from '@material-ui/lab';
import { Markers } from './components';
import { Typography, Divider } from '@material-ui/core';

const useStyles = makeStyles(theme=>({
    root:{
        width:'100%',
        height:'100%'
    },
    switch:{
        position:'fixed',
        zIndex:999,
        marginTop:theme.spacing(2),
        marginLeft:theme.spacing(2)
    },
    group:{
        backgroundColor:'#ffffff80',
        color:'white'
    },
    toggleRoot:{
        backgroundColor:'#03a9f080',
        color:'white'
    },
    selected:{
        backgroundColor:'white',
        color:'blue'
    }
}))

const MapView = props => {

    const classes = useStyles()

    const [styleUrl,setStyleUrl] = useState("mapbox://styles/mapbox/streets-v9")
    const [viewPort, setViewPort] = useState({
        latitude: 2.6724,
        longitude: 32.2481,
        zoom: 10,
        bearing: 0,
        width:'100%',
        height:'90vh',
        pitch: 0
    });
    const [point, setPoint] = useState({
        location:''
    });
    const [popUp, setPopUp] = useState();


    const handleViewPortChange = viewport =>{
        setViewPort({...viewport})
    }

    const handleChange = (event,newUrl) =>{
        setStyleUrl(newUrl)
        console.log(newUrl)
    }

    const handleMarkerClick = (point) =>{
        setPopUp(!popUp)
        setPoint(point)
    }

    return ( 
        <div className={classes.root}>
            <div className={classes.switch}>
                <ToggleButtonGroup
                    value={styleUrl}
                    exclusive
                    classes={{
                        root:classes.group
                    }}
                    onChange={handleChange}
                >
                    <ToggleButton classes={{root:classes.toggleRoot}} value={'mapbox://styles/mapbox/streets-v9'}>
                        Normal view
                    </ToggleButton>
                    <ToggleButton classes={{root:classes.toggleRoot}} value={'mapbox://styles/ogenrwotaaron/ckc2f9die01ft1iqi3ukfpzpp'}>
                        3D view
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
            <ReactMapGL 
                mapStyle={styleUrl}
                mapboxApiAccessToken='pk.eyJ1Ijoib2dlbnJ3b3RhYXJvbiIsImEiOiJjanRxendjbnEwM3NtM3lwMnM3ZTgxNm90In0.p_6NicSsgXEMHJ0c9o1n1A'
                {...viewPort}
                onViewportChange={handleViewPortChange}
            >
                <div style={{position: 'absolute', right: 0}}>
                    <NavigationControl showZoom={true}/>
                </div>
                <Markers handleMarkerClick={handleMarkerClick}/>
                {
                    popUp &&
                    <Popup
                        latitude={parseFloat(point.location.split(',')[0])}
                        longitude={parseFloat(point.location.split(',')[1])}
                        closeButton={false}
                        offsetLeft={15}
                        onClose={handleMarkerClick}
                    >
                        <Typography>{point.id}</Typography>
                        <Divider/>
                        <Typography color='textSecondary'>{point.status}</Typography>
                        <Typography color='textSecondary' variant='caption'>{point.location}, {point.cluster}</Typography>
                    </Popup>
                }
            </ReactMapGL>
        </div>
     );
}
 
export default MapView;