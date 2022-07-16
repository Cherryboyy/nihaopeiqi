import React, {useRef} from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'
import Snackbar, {SnackbarOrigin } from '@mui/material/Snackbar';
import Slide, { SlideProps } from '@mui/material/Slide';
import BasicButtons from '../../pages/home/index'
import Article from '../../components/articles/index'
import instance from '../../utils/index'
import './index.css'

export interface State extends SnackbarOrigin {
    open: boolean;
  }
type TransitionProps = Omit<SlideProps, 'direction'>;
const Tilis: React.FC =() => {
    const [state, setState] = React.useState<State>({
        open: false,
        vertical: 'top',
        horizontal: 'center',
      });
      const { vertical, horizontal } = state;
    const [open, setOpen] = React.useState(false);
    const [transition, setTransition] = React.useState<
      React.ComponentType<TransitionProps> | undefined
    >(undefined);
    // const checkres = ()=> {
    //     setValue1("");
    //     setValue2("");
    //     setValue3("");
    // }
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
    //   setTransition(() => Transition);
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
    <div className='cvbnm' ref={messagesEnd}>
        <div className="index-box">
            <BasicButtons />
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