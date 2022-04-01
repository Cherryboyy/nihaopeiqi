import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import './index.css'
import indexBarder from '../../images/topbarder.png'
import { useNavigate } from 'react-router-dom'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const IndexHeader: React.FC = (props) => {
  let history = useNavigate();
  const barder_list = [
    {index:1,name:'首页',path:'/'},
    {index:2,name:'品牌聚焦',path:'/brand'},
    {index:3,name:'金牌产品',path:'/mage'},
    {index:4,name:'品牌形象',path:'/cedal'},
    {index:5,name:'合作扶持',path:'/contact'},
    {index:6,name:'联系我们',path:'/cooperation'},
  ]
  const handleClick = (val:string) => {
    history(val);
    console.log(val);
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
            <img className="index-herder" src={indexBarder} alt="" />
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <Box sx={{ width: '100%', maxWidth: 1080, bgcolor: 'background.paper' }}>
              <nav aria-label="main mailbox folders">
                <List>
                  {
                    barder_list.map((r,t) => {
                      return (
                        <ListItem disablePadding key={t}>
                          <ListItemButton onClick={()=> {handleClick(r.path)}}>
                            <ListItemText primary={r.name} />
                          </ListItemButton>
                        </ListItem>
                      )
                    })
                  }
                </List>
              </nav>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
  )
}
export default IndexHeader