import React, { useState } from 'react';
import ReactMapGL, { NavigationControl, Source, Layer } from 'react-map-gl'

import guluPolygon from '../../common/gulu.geojson'
import apacPolygon from '../../common/apac.geojson'
import hoimaPolygon from '../../common/hoima.geojson'

const District = props => {

    const { match:{ params:{name} } } = props

    const [viewPort, setViewPort] = useState({
        latitude: 1.9724,
        longitude: 32.3881,
        zoom: 6,
        bearing: 0,
        width:'100%',
        height:'90vh',
        pitch: 0
    });

    const handleViewPortChange = viewport =>{
        setViewPort({...viewport})
    }

    return ( 
        <div>
            <ReactMapGL 
                mapStyle="mapbox://styles/mapbox/streets-v9"
                mapboxApiAccessToken='pk.eyJ1Ijoib2dlbnJ3b3RhYXJvbiIsImEiOiJjanRxendjbnEwM3NtM3lwMnM3ZTgxNm90In0.p_6NicSsgXEMHJ0c9o1n1A'
                {...viewPort}
                onViewportChange={handleViewPortChange}
            >
                <div style={{position: 'absolute', right: 0}}>
                    <NavigationControl showZoom={true}/>
                </div>
                <Source
                    id='polygon'
                    type='geojson'
                    data={name === 'gulu' ? 
                            guluPolygon
                        :
                            name === 'hoima' ?
                                hoimaPolygon
                            :
                            apacPolygon
                    }   
                />
                <Layer
                    type='fill'
                    source='polygon'
                    paint={{
                        "fill-color":"#555555",
                        "fill-opacity":0.4,
                        "fill-outline-color":"#555555"
                    }}
                />
            </ReactMapGL>
        </div>
     );
}
 
export default District;