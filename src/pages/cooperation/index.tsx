import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'

import Grid from '@mui/material/Grid';
import barder1 from '../../images/4/4_04.png'
import barder2 from '../../images/5/1.png'
import barder3 from '../../images/5/2.png'
import barder4 from '../../images/5/3.png'
import barder5 from '../../images/5/4.png'
import './index.css'
import Snackbar from '@mui/material/Snackbar';
import Slide, { SlideProps } from '@mui/material/Slide';

import instance from '../../utils/index'

type TransitionProps = Omit<SlideProps, 'direction'>;

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Medal: React.FC =() => {
  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState<
    React.ComponentType<TransitionProps> | undefined
  >(undefined);
  const checkres = ()=> {
      setValue1("");
      setValue2("");
      setValue3("");
  }
  const checkout = (Transition: React.ComponentType<TransitionProps>) => () => {
      if(value1 !== '' && value2!== '' && value3 !== '') {
        instance.post('/api/msg_board/add',{username:value1,email:value2,message:value3}).then((res) => {
        })
          setValue4("提交成功！")
          setValue1("");
          setValue2("");
          setValue3("");
      } else {
          setValue4("请填写相关内容！")
      }
    setTransition(() => Transition);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const imgs = [
    {id:1,src:barder1},
    {id:2,src:barder2},
    {id:3,src:barder3},
  ]
  const [value1, setValue1] = React.useState('');
  const [value2, setValue2] = React.useState('');
  const [value3, setValue3] = React.useState('');
  const [value4, setValue4] = React.useState('');
  function TransitionUp(props: TransitionProps) {
    return <Slide {...props} direction="up" />;
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
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {
          imgs.map((r,t)=> {
            if(r.id === 2) {
              return (
                <Grid item xs={12} key={t}>
                  <Item>
                    <img src={r.src} alt="" />
                    <div className="box-name">
                      <div className="box-img">
                        <img src={barder4} alt="" className="zhuzhu"/>
                      </div>
                        <div className="my-put">
                          <Box
                            component="form"
                            sx={{
                              width: 500,
                              maxWidth: '100%',
                            }}
                            noValidate
                            autoComplete="off"
                          >
                            <div className="input-my">
                              <TextField fullWidth size="small"  margin="normal" id="outlined-basic" label="姓名" variant="outlined" value={value1}
                                onChange={handleChange1}/>
                            </div>
                            <div className="input-my">
                              <TextField  margin="normal" fullWidth size="small" id="outlined-basic" label="手机号" variant="outlined" value={value2}
                                onChange={handleChange2}/>
                            </div>
                            <div>
                            <TextField fullWidth  margin="normal"
                                id="outlined-multiline-static"
                                label="留言"
                                multiline
                                rows={4}
                                value={value3}
                                onChange={handleChange3}
                              />
                            </div>
                            <div>
                            <Stack spacing={2} direction="row">
                                <Button variant="contained" onClick={checkout(TransitionUp)}>提交</Button>
                                <Button variant="contained" onClick={checkres}>重置</Button>
                                <Snackbar
                                    open={open}
                                    onClose={handleClose}
                                    TransitionComponent={transition}
                                    message={value4}
                                    key={transition ? transition.name : ''}
                                />
                            </Stack>
                          </div>
                          </Box>
                        </div>
                      <div className="zhuzhu1">
                        <img src={barder5} alt="" className="zhuzhu2" />
                      </div>
                    </div>
                  </Item>
                </Grid>
              )
            } else {
              return(
                <Grid item xs={12} key={t}>
                  <Item>
                    <img src={r.src} alt="" />
                  </Item>
                </Grid>
              )
            }
          })
        }
      </Grid>
    </Box>
  );
}
export default Medal