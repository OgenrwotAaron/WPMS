import React from 'react';
import { Radar } from 'react-chartjs-2';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Divider,
  Typography
} from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  chartContainer: {
    position: 'relative',
    height: '300px'
  },
  stats: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-around'
  },
  device: {
    textAlign: 'center',
    padding: theme.spacing(1)
  },
  deviceIcon: {
    color: theme.palette.icon
  },
}));

const UsersByDevice = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const theme = useTheme();

  const data = {
    datasets: [
      {
        data: [5000,3000,4500,3500,4000],
        backgroundColor:'#43a0474f',
        //   theme.palette.error.main,
        //   theme.palette.warning.main,
        //   theme.palette.error.main,
        //   theme.palette.warning.main,
        // ],
        // borderWidth: 8,
        borderColor: '#43a047',
        // hoverBorderColor: theme.palette.white
      }
    ],
    labels: ['North', 'East', 'South','Central','West']
  };

  const options = {
    legend: {
      display: false,
    },
    responsive: true,
    maintainAspectRatio: false,
    animation: false,
    scale: {
      angleLines: {
          display: false
      },
      ticks: {
          suggestedMin: 50,
          suggestedMax: 100
      }
  }
  };

  const myLabels = [
    {
      title: 'North',
      value: 5000/20000*100,
      color: theme.palette.secondary
    },
    {
      title: 'East',
      value: 3000/20000*100,
      color: theme.palette.secondary
    },
    {
      title: 'South',
      value: 4500/20000*100,
      color: theme.palette.secondary
    },
    {
      title: 'Central',
      value: 3500/20000*100,
      color: theme.palette.secondary
    },
    {
      title: 'West',
      value: 4000/20000*100,
      color: theme.palette.secondary
    }
  ];

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        action={
          <IconButton size="small">
            <RefreshIcon />
          </IconButton>
        }
        title="Water Points Distribution"
      />
      <Divider />
      <CardContent>
        <div className={classes.chartContainer}>
          <Radar
            data={data}
            options={options}
          />
          {/* <Doughnut
            data={data}
            options={options}
          /> */}
        </div>
        <div className={classes.stats}>
          {myLabels.map(label => (
            <div
              className={classes.label}
              key={label.title}
            >
              <Typography variant="body1">{label.title}</Typography>
              <Typography
                style={{ color: label.color }}
                variant="h4"
              >
                {label.value}%
              </Typography>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

UsersByDevice.propTypes = {
  className: PropTypes.string
};

export default UsersByDevice;
