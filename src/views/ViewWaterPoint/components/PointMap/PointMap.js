import React, { useState } from 'react';
import ReactMapGL, { NavigationControl, Marker, Popup } from 'react-map-gl'

import markerImage from '../../../../assets/icons/marker.svg'
import { Typography, Divider } from '@material-ui/core';

const PointMap = props => {

    const { coords, status, id, cluster} = props

    const [viewPort, setViewPort] = useState({
        latitude: parseFloat(coords.split(',')[0]),
        longitude: parseFloat(coords.split(',')[1]),
        zoom: 15,
        bearing: 0,
        width:400,
        height:400,
        pitch: 0
    });
    const [popUp, setPopUp] = useState(false);

    const handleViewPortChange = viewport =>{
        setViewPort({...viewport})
    }

    const handleMarkerClick = event =>{
        setPopUp(!popUp)
    }

    return ( 
        <div >
            <ReactMapGL 
                mapStyle="mapbox://styles/mapbox/streets-v9"
                mapboxApiAccessToken='pk.eyJ1Ijoib2dlbnJ3b3RhYXJvbiIsImEiOiJjanRxendjbnEwM3NtM3lwMnM3ZTgxNm90In0.p_6NicSsgXEMHJ0c9o1n1A'
                {...viewPort}
                onViewportChange={handleViewPortChange}
            >
                <div style={{position: 'absolute', right: 0}}>
                    <NavigationControl showZoom={true}/>
                </div>
                <Marker latitude={parseFloat(coords.split(',')[0])} longitude={parseFloat(coords.split(',')[1])}>
                    <img onClick={handleMarkerClick} src={markerImage} width='30px' alt='marker'/>
                </Marker>
                {
                    popUp &&
                    <Popup
                        latitude={parseFloat(coords.split(',')[0])}
                        longitude={parseFloat(coords.split(',')[1])}
                        offsetLeft={15}
                        closeButton={false}
                        onClose={handleMarkerClick}
                    >
                        <Typography>{id}</Typography>
                        <Divider/>
                        <Typography color='textSecondary'>{status}</Typography>
                        <Typography variant='caption' color='textSecondary'>{coords}, {cluster}</Typography>
                    </Popup>
                }
            </ReactMapGL>
        </div>
     );
}
 
export default PointMap;