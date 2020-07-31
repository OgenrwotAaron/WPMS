import React from 'react';
import clsx from 'clsx';
import {
    Card,
    CardActions,
    CardContent,
    Avatar,
    Typography,
    Divider,
    Button,
    makeStyles,
    Chip
} from '@material-ui/core';
  
const useStyles = makeStyles(theme => ({
    root: {},
    details: {
      display: 'flex'
    },
    avatar: {
      marginLeft: 'auto',
      height: 100,
      width: 100,
      fontSize:48,
      flexShrink: 0,
      flexGrow: 0
    },
    uploadButton: {
      marginRight: theme.spacing(2)
    },
    Active:{
        backgroundColor:theme.palette.success.main,
        color:theme.palette.success.contrastText
    },
    Pending:{
        backgroundColor:theme.palette.warning.main,
        color:theme.palette.warning.contrastText
    },
    InActive:{
        backgroundColor:theme.palette.error.main,
        color:theme.palette.error.contrastText
    },
}));

const Summary = props => {

    const { org } = props

    const classes = useStyles()

    return ( 
        <Card
            className={clsx(classes.root)}
        >
            <CardContent>
                <div className={classes.details}>
                    <div>
                        <Typography
                            gutterBottom
                            variant="h2"
                        >
                            {org.name}
                        </Typography>
                        <Typography
                            className={classes.locationText}
                            variant='body1'
                        >
                            {org.email}
                        </Typography>
                        <Typography
                            className={classes.dateText}
                            color="textSecondary"
                            variant="body1"
                        >
                            {org.clusters}
                        </Typography>
                        <Chip label={org.access} className={classes[org.access]} size='small'/>
                    </div>
                    <Avatar
                        className={classes.avatar}
                    >
                        {org.name[0]}
                    </Avatar>
                </div>
            </CardContent>
            <Divider />
            <CardActions>
                <Button
                    className={classes.uploadButton}
                    color="primary"
                    variant="text"
                >
                    Upload picture
                </Button>
                <Button variant="text">Remove picture</Button>
            </CardActions>
        </Card>
     );
}
 
export default Summary;