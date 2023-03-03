import React, { useEffect, useState } from "react";
import Slider from '@mui/material/Slider';

const Seekbar = (props) => {
  const [timer, setTimer] = useState(false);
  const duration = props.playingSongInfo.end_time - props.playingSongInfo.start_time; // 秒

  const countUp = () => {
    props.setCount(prevState => prevState + 1)
  }

  useEffect(() => {
    if(timer){
      const timerId = setInterval(countUp, 1000);
      return(() => clearInterval(timerId));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer])

  useEffect(() => {
    if(props.isVideoPlaying){
      setTimer(true);
    } else {
      setTimer(false);
      props.setCount(0);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.isVideoPlaying])


  return(
    <Slider
      aria-label='移動スライダー'
      size='small'
      value={props.currentTime + props.count}
      min={0}
      step={1}
      max={duration}
      onChange={(_, value) => props.setCurrentTime(value)}
      sx={{
        color: 'rgba(255, 0, 0, 1)',
        height: 4,
        p: 0,
        display: 'block',
        '& .MuiSlider-thumb': {
          width: 4,
          height: 4,
          transition: '0.3s cubic-bezier(0.2, 0, 0.6, 1)',
          // '&:before': {
          //   boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
          // },
          '&:hover': {
            width: 8,
            height: 8,
          },
          '&.Mui-active': {
            width: 8,
            height: 8,
          },
          '&.MuiSlider-rail:hover': {
            width: 8,
            height: 8
          }
        },
        '& .MuiSlider-rail': {
          color: 'rgba(189, 189, 189, 1)',
        },
      }}
    />
  );
}

export default Seekbar;