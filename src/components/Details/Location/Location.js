import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

import MyGoogleMap from './GoogleMap/MyGoogleMap';

const useStyles = makeStyles({
  root: {

  }
})

const Location = props => {
  const classes = useStyles();
  const { coordinates, nombre } = props;
  return (
    <section className={classes.root}>
      <MyGoogleMap
        coordinates={coordinates}
        nombre={nombre}
      // googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBzE15BZUN0Xhhx0OzkMKNlaII7QX4p6GU"
      // loadingElement={<div style={{ height: '100%' }} />}
      // containerElement={<div style={{ height: '400px' }} />}
      // mapElement={<div style={{ height: '100%' }} />}
      />
    </section>
  );
};

Location.propTypes = {
  coordinates: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired
  }).isRequired,
  nombre: PropTypes.string.isRequired
};

export default Location;