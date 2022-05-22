import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import './index.css'
// import ListitemImg from '../../images/list/1.jpg'
import ListitemImg2 from '../../images/list/2.png'
import ListitemImg3 from '../../images/list/3.png'
import ListitemImg4 from '../../images/list/4.jpg'
import ListitemImg5 from '../../images/list/5.png'
import ListitemImg6 from '../../images/list/6.png'
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { useNavigate } from 'react-router-dom';


const Article: React.FC = () => {
  const navigate = useNavigate();
  const isList = [
    {id:1,name:'打造差异化茶饮，你好佩奇奶茶奶茶从市场中突',text:'近年来，茶饮品牌层出不穷，茶饮市场的竞争也变得越来越激烈!根据相关数据........', img:ListitemImg2},
    {id:2,name:'圈粉、霸屏、复合经营，你好佩奇奶茶成茶饮行',text:'创业风口总伴有无限商机，如果你错过了当年的一点点、益禾堂，那么今年再.........', img:ListitemImg3},
    {id:3,name:'你好佩奇奶茶实力霸屏，强势登录各大卫视',text:'近来，你好佩奇奶茶实力霸屏，强势登陆江苏卫视、广东卫视、四川卫视、安徽影.........', img:ListitemImg4},
    {id:4,name:'你好佩奇奶茶有颜有料，“动漫IP+世界冠军',text:'饮品市场的潜力，远超乎你的想象。占据着中国餐饮业半壁江山的奶茶饮品.............', img:ListitemImg5},
    {id:5,name:'你好佩奇奶茶C位出道，领跑茶饮新一轮赛道',text:'这两年疫情的肆虐，不少中小实体门店受到不同程度的冲击，纵观国内奶茶行业........', img:ListitemImg6},
    // {id:6,name:'',text:''}
  ]
  const clickout = (val:any) => {
    navigate(`/article/${val}`)
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
  return (
    <div>
      <div>
        <NewspaperIcon className='list-ionc'/>
        <span className='list-text'>新闻资讯</span>
      </div>
      <List sx={{ width: '100%', maxWidth: 1440, bgcolor: 'background.paper', display:'flex',  flexWrap:'wrap'}}>
        {
          isList.map((item, index) =>{
            return (
              <ListItem className='list-item' key={index} onClick={() => {clickout(item.id)}}>
                <ListItemAvatar>
                  <img alt='' className='list-img' src={item.img} />
                </ListItemAvatar>
                <ListItemText primary={item.name} secondary={item.text} />
              </ListItem>
            )
          })
        }
      </List>
    </div>
  );
}
export default Article