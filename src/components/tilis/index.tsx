import React, {useRef, Suspense} from 'react';
import { Route, Routes } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'
import Snackbar, {SnackbarOrigin } from '@mui/material/Snackbar';
// import BasicButtons from '../../pages/home/index'
import Article from '../../components/articles/index'
import instance from '../../utils/index'
import router from '../../router' 
import './index.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom'

export interface State extends SnackbarOrigin {
    open: boolean;
  }
const Tilis: React.FC =() => {
    const [state, setState] = React.useState<State>({
        open: false,
        vertical: 'top',
        horizontal: 'center',
      });
      const { vertical, horizontal } = state;
    const [open, setOpen] = React.useState(false);
    // const checkres = ()=> {
    //     setValue1("");
    //     setValue2("");
    //     setValue3("");
    // }
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const menus = Boolean(anchorEl);
    const barder_list = [
        {index:1,name:'首页',path:'/'},
        {index:2,name:'品牌聚焦',path:'/brand'},
        {index:3,name:'金牌产品',path:'/mage'},
        {index:4,name:'品牌形象',path:'/cedal'},
        {index:5,name:'合作扶持',path:'/contact'},
        {index:6,name:'联系我们',path:'/cooperation'},
      ]
    const Clickmenu = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const Closemenu = () => {
      setAnchorEl(null);
    };
    const messagesEnd = useRef<HTMLDivElement>(null);
    const handleClick = (newState: SnackbarOrigin) => () => {
        setState({ open: true, ...newState })
        if (messagesEnd && messagesEnd.current) {
            messagesEnd.current.scrollIntoView({ behavior: 'smooth', block: 'end', });
          }
        if(value2!== '') {
            instance.post('/api/msg_board/add',{username:value1,email:value2,message:value3}).then((res) => {
            })
            setValue4("提交成功！")
            setValue1("");
            setValue2("");
            setValue3("");
        } else {
            setState({ open: true, ...newState })
            setValue4("请填写姓名与手机号以便与接收资料！")
        }
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


  const [value1, setValue1] = React.useState('');
  const [value2, setValue2] = React.useState('');
  const [value3, setValue3] = React.useState('');
  const [value4, setValue4] = React.useState('');
  let history = useNavigate();
  const handleroute = (val:string) => {
    history(val);
    console.log(val);
  }
  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue1(event.target.value);
    console.log(value1);
  };
  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue2(event.target.value);
  };
  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue3(event.target.value);
  };
  return (
    <div className='cvbnm' ref={messagesEnd}>
        <div>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}
                onClick={Clickmenu}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" component="div">
                    你好佩奇鲜果茶
                </Typography>
                </Toolbar>
            </AppBar>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={menus}
                onClose={Closemenu}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                {
                    barder_list.map((r,t) => {
                      return (
                          <MenuItem key={t} onClick={()=> {handleroute(r.path)}}>
                            {r.name}
                          </MenuItem>
                      )
                    })
                  }
            </Menu>
        </Box>
        </div>
        <div className="index-box">
            {/* <BasicButtons /> */}
            <Routes>
            {
                router.map((item, i) => {
                console.log('----',item)
                return (
                    <Route key={i} path={item.path} element={
                    <Suspense fallback={
                        <div>路由懒加载...</div>
                    }>
                    < item.component />
                    </Suspense>
                    } />
                )
                })
            }
            </Routes>
        </div>
        <div>
            
        </div>
        <div>
            <Article />
        </div>
        <div className="bot-text">
            春之泉品牌管理有限公司
        </div>
      <div>
        <TextField fullWidth size="small"  margin="normal" id="outlined-basic" label="姓名" variant="outlined" value={value1}
          onChange={handleChange1}/>
      </div>
      <div>
        <TextField  margin="normal" fullWidth size="small" id="outlined-basic" label="请输入手机号领取资料" variant="outlined" value={value2}
          onChange={handleChange2}/>
      </div>
      <div className='box-textver'>
      <TextField fullWidth  margin="normal"
          id="outlined-multiline-static"
          label="留言"
          multiline
          rows={4}
          value={value3}
          onChange={handleChange3}
        />
      </div>
      <div className='box-tilis-ts'>
            <div className='box-tilis'>
                <Stack spacing={2} direction="row">
                    <Button variant="contained" onClick={handleClick({
            vertical: 'top',
            horizontal: 'center',
            })}>提交领取项目资料</Button>
                    {/* <Button variant="contained" onClick={checkres}>重置</Button> */}
                    <Snackbar
                        anchorOrigin={{ vertical, horizontal }}
                        open={open}
                        onClose={handleClose}
                        message={value4}
                        key={vertical + horizontal}
                    />
                </Stack>
            </div>
        </div>
        {/* <div className='but-box'>
          <a href="https://beian.miit.gov.cn/#/Integrated/index">粤ICP备 17148202号</a>
        </div> */}
    </div>
  );
}
export default Tilis