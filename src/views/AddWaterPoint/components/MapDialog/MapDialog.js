import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core';
import ReactMapBoxGl, { ZoomControl} from 'react-mapbox-gl'
import DrawControl from 'react-mapbox-gl-draw'
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";

const MapDialog = props => {

    const { open, setClose } = props

    const Map = ReactMapBoxGl({
        accessToken:'pk.eyJ1Ijoib2dlbnJ3b3RhYXJvbiIsImEiOiJjanRxendjbnEwM3NtM3lwMnM3ZTgxNm90In0.p_6NicSsgXEMHJ0c9o1n1A'
    })

    const onDrawCreate = ({features}) =>{
        console.log(features)
    }

    const onDrawUpdate = ({features}) =>{
        console.log(features)
    }

    return ( 
        <Dialog open={open} onClose={setClose}>
            <DialogTitle>{"Add Water Point Marker to Map"}</DialogTitle>
            <DialogContent>
                <Map
                    style="mapbox://styles/mapbox/streets-v9"
                    containerStyle={{
                        width:'400px',
                        height:'400px'
                    }}
                    center={[32.2881,2.7724]}
                    zoom={[15]}
                >
                    <ZoomControl/>
                    <DrawControl onDrawCreate={onDrawCreate} onDrawUpdate={onDrawUpdate}/>
                </Map>
            </DialogContent>
            <DialogActions>
                <Button onClick={setClose}>Cancel</Button>
                <Button onClick={setClose} variant='contained' color='secondary'>Confirm</Button>
            </DialogActions>
        </Dialog>
     );
}
 
export default MapDialog;