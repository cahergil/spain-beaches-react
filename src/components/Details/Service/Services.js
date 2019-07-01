import React from 'react';
import { makeStyles } from '@material-ui/core';

import FootImg from '../../../assets/images/services/footprints.png'
import ToiletImg from '../../../assets/images/services/toilet.png'
import ShowerImg from '../../../assets/images/services/beach_shower.png'
import BinImg from '../../../assets/images/services/bin.png'
import CleaningImg from '../../../assets/images/services/cleaning.png'
import TouristOfficeImg from '../../../assets/images/services/info.png'
import TelephoneImg from '../../../assets/images/services/telephone.png'
import BeachBarImg from '../../../assets/images/services/bar.png'
import DrinkStandImg from '../../../assets/images/services/drinks.png'
import SunbedImg from '../../../assets/images/services/sunbed.png'
import UmbrellaImg from '../../../assets/images/services/umbrella.png'
import NauticsRentalImg from '../../../assets/images/services/sailboat.png'
import NauticalClubImg from '../../../assets/images/services/yacht.png'
import DivingAreaImg from '../../../assets/images/services/dive.png'
import SurfAreaImg from '../../../assets/images/services/surfing.png'
import ChildrenAreaImg from '../../../assets/images/services/swing.png'
import SportAreaImg from '../../../assets/images/services/kick.png'

const useStyles = makeStyles({
  root: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(25rem, 1fr))',
    gridRowGap: '2rem',
    // gridColumnGap: '3rem',
    padding: '2rem 2rem'
  },
  // column: {
  //   display: 'grid',
  //   gridTemplateColumns: '49% 49%',
  //   gridColumnGap: '2%'
  // },
  row: {
    display: 'grid',
    gridTemplateColumns: '20% 60% 5%',
    // gridColumnGap: '3.3%',
    justifyItems: 'left',
    alignItems: 'center',
    fontSize: '1.5rem'
  }

})

const Services = props => {
  const { beach } = props;
  const classes = useStyles();

  return (
    <section className={classes.root}>
      
        <div className={classes.row}>
          <img src={ToiletImg} alt="toilet"/>
          <p>Toilet:</p>
          <p>{beach.aseos}</p>
        </div>
        <div className={classes.row}>
          <img src={FootImg} alt="foot" />
          <p>Footbath:</p>
          <p>{beach.lavapies}</p>
        </div>
     
      {/* <div className={classes.column}> */}
        <div className={classes.row}>
          <img src={ShowerImg} alt="shower" />
          <p>Shower:</p>
          <p>{beach.duchas}</p>
        </div>
        <div className={classes.row}>
          <img src={BinImg} alt="bin" />
          <p>Bin:</p>
          <p>{beach.papelera}</p>
        </div>
        <div className={classes.row}>
          <img src={CleaningImg} alt="cleaning service" />
          <p>Cleaning service:</p>
          <p>{beach.servicio_limpieza}</p>
        </div>
        <div className={classes.row}>
          <img src={TouristOfficeImg} alt="tourist office" />
          <p>Tourist office:</p>
          <p>{beach.oficina_turismo}</p>
        </div>
        <div className={classes.row}>
          <img src={TelephoneImg} alt="telephone" />
          <p>Telephone:</p>
          <p>{beach.telefonos}</p>
        </div>
        <div className={classes.row}>
          <img src={BeachBarImg} alt="beach bar" />
          <p>Beach bar:</p>
          <p>{beach.establecimiento_comida}</p>
        </div>
        <div className={classes.row}>
          <img src={DrinkStandImg} alt="drink stand" />
          <p>Drink stand:</p>
          <p>{beach.establecimiento_bebida}</p>
        </div>
        <div className={classes.row}>
          <img src={SunbedImg} alt="sunbed rental" />
          <p>Sunbed rental:</p>
          <p>{beach.alquiler_hamacas}</p>
        </div>
        <div className={classes.row}>
          <img src={UmbrellaImg} alt="umbrella rental" />
          <p>Beach umbrella rental:</p>
          <p>{beach.alquiler_sombrillas}</p>
        </div>
        <div className={classes.row}>
          <img src={NauticsRentalImg} alt="nautics rental" />
          <p>Nautics rental:</p>
          <p>{beach.alquiler_nauticos}</p>
        </div>
        <div className={classes.row}>
          <img src={NauticalClubImg} alt="nautical rental" />
          <p>Nautical club:</p>
          <p>{beach.club_nautico}</p>
        </div>
        <div className={classes.row}>
          <img src={DivingAreaImg} alt="diving area" />
          <p>Diving area:</p>
          <p>{beach.submarinismo}</p>
        </div>
        <div className={classes.row}>
          <img src={SurfAreaImg} alt="surf" />
          <p>Surfing area:</p>
          <p>{beach.zona_surf}</p>
        </div>
        <div className={classes.row}>
          <img src={ChildrenAreaImg} alt="children's area" />
          <p>Children's area:</p>
          <p>{beach.zona_infantil}</p>
        </div>
        <div className={classes.row}>
          <img src={SportAreaImg} alt="sport's area" />
          <p>Sport's zone:</p>
          <p>{beach.zona_deportiva}</p>
        </div>
    </section>
  );
}

export default Services;