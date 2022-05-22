import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import barder1 from '../../images/bottonbarder.png'
import Valuebox from './bottom'
import './index.css'


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const BasicButtons: React.FC =() => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Item>
            <div className="box-her">
                <div className='box-her-img'>
                    <img src={barder1} alt="" className="img-bot"/>
                </div>
                <div className="her-val">
                    <div>
                        <Valuebox/>
                    </div>
                </div>
            </div>
        </Item>
      </Grid>
    </Box>
  );
}
export default BasicButtons