import React from 'react';
import points from '../../../../common/pointData.json';
import { Marker } from 'react-map-gl'

import markerGreen from '../../../../assets/icons/marker.svg';
import markerYellow from '../../../../assets/icons/markerYellow.svg';
import markerRed from '../../../../assets/icons/markerRed.svg';

const Markers = props => {

   const { handleMarkerClick } = props

    return points.map(point=>(
        <Marker key={point.id} latitude={parseFloat(point.location.split(',')[0])} longitude={parseFloat(point.location.split(',')[1])}>
            <img 
                onClick={() => handleMarkerClick(point)} 
                src={point.status === 'Functional' ? 
                        markerGreen
                    :
                        point.status === 'Needs Repair' ?
                            markerYellow
                        :
                            markerRed
                    } 
                width='30px' 
                alt='marker'/>
        </Marker>
    ))
}
 
export default Markers;