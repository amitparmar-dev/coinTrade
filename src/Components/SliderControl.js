import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
const useStyles = makeStyles((theme)=>({
  labelStyle : {
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: "18px",
    padding:10,
    lineHeight: "30px",
    letterSpacing: "0.15px",
    color: "#303030"
  },
  container : {
    margin:10,
    padding:15,
    border: '4px solid #f0f0f0',
    borderRadius: '5px'
  },
  sliderGridStyle : {
    padding:10
  }
}))
const CustomBoxShadow = '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';
const CustomSlider = withStyles({
  root: {
    color: '#3880ff',
    height: 2,
    padding: '15px 0',
  },
  thumb: {
    height: 28,
    width: 28,
    backgroundColor: '#fff',
    boxShadow: CustomBoxShadow,
    marginTop: -14,
    marginLeft: -14,
    '&:focus, &:hover, &$active': {
      boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        boxShadow: CustomBoxShadow,
      },
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 12px)',
    top: -22,
    '& *': {
      background: 'transparent',
      color: '#000',
    },
  },
  track: {
    height: 2,
  },
  rail: {
    height: 2,
    opacity: 0.5,
    backgroundColor: '#bfbfbf',
  },
  mark: {
    backgroundColor: '#bfbfbf',
    height: 8,
    width: 1,
    marginTop: -3,
  },
  markActive: {
    opacity: 1,
    backgroundColor: 'currentColor',
  },
})(Slider);
export default function SliderControl(props) {
  const classes = useStyles();
  const [decimalValidation, setDecimalValidation] = useState({error : false, errorText : ""})
  const [minDecimalValidation, setMinDecimalValidation] = useState({error : false, errorText : ""})
  const [maxDecimalValidation, setMaxDecimalValidation] = useState({error : false, errorText : ""})
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(100.15);
  const [value, setValue] = React.useState(minVal);

  const handleChange = (event, newValue) => {
    if(newValue< maxVal && newValue > minVal )
      setValue(newValue);
  };
  const handleOnValChange = e =>{
  
    setValue(e.target.value)
    const regexp =  /^\d+\.?\d{0,2}$/;
    regexp.test(e.target.value)? setDecimalValidation({error:false, errorText:''}) : setDecimalValidation({error:true, errorText:'Invalid Number'})
      
  }

  const handleOnMinValChange = e =>{
    setMinVal(e.target.value)
    setValue(e.target.value)
    const regexp =  /^\d+\.?\d{0,2}$/;
    regexp.test(e.target.value)? setMinDecimalValidation({error:false, errorText:''}) : setMinDecimalValidation({error:true, errorText:'Invalid Number'})
      
  }
  const handleOnMaxValChange = e =>{
    setMaxVal(e.target.value)
    setValue(e.target.value)
    const regexp =  /^\d+\.?\d{0,2}$/;
    regexp.test(e.target.value)? setMaxDecimalValidation({error:false, errorText:''}) : setMaxDecimalValidation({error:true, errorText:'Invalid Number'})
      
  }
  return (
  <Grid container item md = {6} className={classes.container}>
      <Grid item md={6}>
        <label className={classes.labelStyle}> Min</label>
        <TextField
          id="standard-number"
          type="number"
          variant="outlined"
          size="small"
          fullWidth
          style={{ width: "100px", background: "#f0f0f0" }}
          value={minVal}
          error={minDecimalValidation.error}
          helperText={minDecimalValidation.errorText}
          onChange={(e) => handleOnMinValChange(e)}
          inputProps={{ style: { textAlign: "right", background: "white", maxLength: 40 } }}
        />
      </Grid>
      <Grid item md={6}>
        <label className={classes.labelStyle}> Max</label>
        <TextField
          id="standard-number"
          type="number"
          variant="outlined"
          size="small"
          fullWidth
          style={{ width: "100px", background: "#f0f0f0" }}
          value={maxVal}
          error={maxDecimalValidation.error}
          helperText={maxDecimalValidation.errorText}
          onChange={(e) => handleOnMaxValChange(e)}
          inputProps={{ style: { textAlign: "right", background: "white", maxLength: 40 } }}
        />
      </Grid>
      <Grid item md={10} className={classes.sliderGridStyle}>
          <CustomSlider 
            value={value} 
            step={0.01}
            scale={(x) => x}
            onChange={handleChange} 
            max = {maxVal}
            min = {minVal}
            aria-labelledby="continuous-slider" />
      </Grid>
      <Grid item md={2} className={classes.sliderGridStyle}>
      <TextField
          id="standard-number"
          type="number"
          variant="outlined"
          size="small"
          style={{ width: "100px", background: "#f0f0f0" }}
          value={value}
          error={decimalValidation.error}
          helperText={decimalValidation.errorText}
          onChange={(e) => handleOnValChange(e)}
          inputProps={{ style: { textAlign: "right", background: "white", maxLength: 40 } }}
        />
      </Grid>
    </Grid>)
}
