import React, { useState } from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import { Summary, Details } from './components';

import organisations from '../../common/organisationData.json'

const useStyles = makeStyles(theme=>({
    root:{
        padding:theme.spacing(4)
    }
}))

const Organisation = props => {

    const classes = useStyles()

    const [org] = useState(...organisations.filter(org=>org.id===parseInt(props.match.params.id)));

    // access: "Active"
    // clusters: "Tegwana, Laliya, Layibi"
    // confirm: true
    // email: "savethechildren@save.com"
    // id: 1
    // name: "Save the Children"
    // type: "N.G.O"

    return ( 
        <div className={classes.root}>
            <Grid container spacing={4}>
                <Grid 
                    item
                    lg={4}
                    md={6}
                    xl={4}
                    xs={12}
                >
                    <Summary org={org}/>
                </Grid>
                <Grid 
                    item
                    lg={8}
                    md={6}
                    xl={8}
                    xs={12}
                >
                    <Details org={org} />
                </Grid>
            </Grid>
        </div>
     );
}
 
export default Organisation;