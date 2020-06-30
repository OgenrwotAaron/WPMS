import React, { useState } from 'react';
import ReactMapBoxGl, { Layer, Feature, ZoomControl} from 'react-mapbox-gl'
import { makeStyles } from '@material-ui/styles';
import { ToggleButtonGroup, ToggleButton} from '@material-ui/lab';

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

    const Map = ReactMapBoxGl({
        accessToken:'pk.eyJ1Ijoib2dlbnJ3b3RhYXJvbiIsImEiOiJjanRxendjbnEwM3NtM3lwMnM3ZTgxNm90In0.p_6NicSsgXEMHJ0c9o1n1A'
    })

    const handleChange = (event,newUrl) =>{
        console.log(newUrl,event.target.value)
        setStyleUrl(newUrl)
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
            <Map
                style={styleUrl}
                containerStyle={{
                    width:'100%',
                    height:'100%'
                }}
                center={[32.2881,2.7724]}
                zoom={[15]}
            >
                <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                    <Feature coordinates={[2.7724, 32.2881]} />
                </Layer>
                <ZoomControl/>
            </Map>
        </div>
     );
}
 
export default MapView;