import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import ReactImageFallback from "react-image-fallback";

import errorImage from '../../../../assets/images/image_na.png';
import loaderGif from '../../../../assets/images/loader.gif';
import BeachObject from '../../../Model/Model';
import FeatureItem from './FeatureItem';

const useStyles = makeStyles(theme => ({
  root: {
    width: '35rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
    
  },
  imageWrapper: {
    overflow: 'hidden',
    height: '20rem',
    width: '100%',
    marginBottom: '10px',
    cursor: 'pointer'
  },
  image: {
    // height: 0,
    // paddingTop: '56.25%', // 16:9
    objectFit: 'cover',
    height: '20rem',
    width: '100%',
    marginBottom: '1rem',
    transition: 'all 0.4s',
    backfaceVisibility: 'hidden',
    '&:hover': {
      transform: 'scale(1.1)',
      filter: 'brightness(70%)'
    }
  },
  terminoMunicipal: {
    fontSize: '1.3rem',
    fontStyle: 'italic',
    color: '#959595',
    marginBottom: '5px'
  },
  beachName: {
    fontSize: '1.8rem',
    textTransform: 'uppercase',
    color: theme.palette.primary.main,
    cursor: 'pointer'
  },
  hr: {
    width: '25px',
    height: '2px',
    marginTop: '8px',
    backgroundColor: '#000'
  },
  featureList: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap'
  }
}));

const ResultsContentItem = (props) => {
  const { beach } = props;
  const classes = useStyles(props);
  const imagesArray = beach.images.split(',');
  const image = imagesArray[imagesArray.length - 1];
  const featureList = [];
  const length = beach.longitud.replace('metros', 'm').replace(',', '.');  
  const lifeGuard = beach.auxilio_y_salvamento === 'Sí' ? 'lifeguard' : null;
  const nudism = beach.nudismo === 'Sí' ? 'nudism': null;
  const surf = beach.zona_surf === 'Sí' ? 'surf' : null;
  const beachBar = beach.establecimiento_comida === 'Sí' ? 'beach bar':null;
  const shower = beach.duchas === 'Sí' ? 'shower' : null;
  const blueFlag = beach.bandera_azul === 'Sí' ? 'blue flag' : null;
  const diving = beach.submarinismo === 'Sí' ? 'diving' : null;
  featureList.push(length, shower, beachBar, lifeGuard, nudism, surf, diving, blueFlag);

  const handleButtonClick = (e) => {

    props.history.push({
      pathname: '/details/beach',
      search: `?id=${beach.id}`
    });
  }


  return (
    <div className={classes.root} >
      <div className={classes.imageWrapper} onClick={handleButtonClick}>
      <ReactImageFallback
        src={image}
        fallbackImage={errorImage}
        initialImage={loaderGif}
        alt={beach.nombre}
        className={classes.image} />

      </div>
      <div className={classes.terminoMunicipal}>{beach.termino_municipal}</div>
      <div className={classes.beachName} onClick={handleButtonClick}>{beach.nombre.concat(' beach')}</div>
      <div className={classes.hr}></div>
      <div className={classes.featureList}>
        {
          featureList.filter(feature => feature !== null)
            .map((feature, i) => {
              return (
                <FeatureItem feature={feature} />
              );
          })
      }
      </div>
    </div>
  );
}
ResultsContentItem.propTypes = {
  beach: PropTypes.shape(BeachObject).isRequired
}

export default withRouter(ResultsContentItem);