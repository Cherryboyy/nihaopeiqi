import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar';
import Slide, { SlideProps } from '@mui/material/Slide';
import instance from '../../utils/index'

type TransitionProps = Omit<SlideProps, 'direction'>;

const BasicButtons: React.FC =() => {
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
    <Box
      component="form"
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
      noValidate
      autoComplete="off"
    >
        <div className="bot-text">
            春之泉品牌管理(广州)有限公司
        </div>
      <div>
        <TextField fullWidth size="small"  margin="normal" id="outlined-basic" label="姓名" variant="outlined" value={value1}
          onChange={handleChange1}/>
      </div>
      <div>
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
        <div className='but-box'>
          <a href="https://beian.miit.gov.cn/#/Integrated/index">粤ICP备 17148202号</a>
        </div>
    </Box>
  );
}
export default BasicButtons