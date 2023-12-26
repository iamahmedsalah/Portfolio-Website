import {Particles} from 'react-tsparticles';
import{loadFull} from 'tsparticles';
import React,{useCallback} from 'react';

const ParticlesContainer = () => {

  // initail
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (engine) =>{ } , []);


  return <Particles 
  className=' w-full h-full absolute translate-z-0 '
  id='tsparticles' 
  init={particlesInit} 
  loaded={particlesLoaded}
  options={{
    fullScreen: {enable: false},
    background: {
      color:{
        value: '',
      }
    },
    fps_limit: 120,
    interactivity: {
      events:{
        onClick: {
          enable: false,
          mode: 'push',
        },
        onHover: {
          enable: true,
          mode: 'repulse'
        },
        resize: true,
      },
      modes:{
        push:{
          quantity:90
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color:{
        value: '#e68e2e',
      },
      links:{
        enable: true,
        color:' #f5d393',
        distance: 350,
        opacity: 0.5,
        width: 1,
      },
      collisions:{
        enable: true,
      },
      move:{
        direction: 'none',
        enable: true,
        outModes:{
          default: 'bounce'
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number:{
        density:{
          enable: true,
          area: 800,
        },
        value:80,
      },
      opacity:{
        value:0.5,
      },
      shape:{
        type: 'image',
        image: {
          src: 'https://www.pngall.com/wp-content/uploads/10/Binance-Coin-Crypto-Logo-PNG-Background.png',
          width: 100,
          height: 100,
        },
      },
      size:{
        value:{min: 1 , max: 15},
      },
    },
    detectRetina: true,
  }}/>
};

export default ParticlesContainer;
