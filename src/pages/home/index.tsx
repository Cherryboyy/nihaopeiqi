import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import barder1 from '../../images/1/1_04.png'
import barder2 from '../../images/01/01_05.png'
import barder3 from '../../images/01/01_07.png'
// import barder4 from '../../images/01/01_10.png'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const BasicButtons: React.FC =() => {
  const imgs = [
    {id:1,src:barder1},
    {id:2,src:barder2},
    {id:3,src:barder3},
    // {id:4,src:barder4},
  ]
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {
          imgs.map((r,t)=> {
            return(
              <Grid item xs={12} key={t}>
                <Item>
                  <img src={r.src} alt="" />
                </Item>
              </Grid>
            )
          })
        }
      </Grid>
    </Box>
  );
}
export default BasicButtons