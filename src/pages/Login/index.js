import './index.scss'
import { Card, Form, Input, Button } from 'antd'
import logo from '../../assets/logo.png'
import {useDispatch} from 'react-redux'
import {fetchLogin} from '../../store/user.js'
import {useNavigate} from 'react-router-dom'
import {message} from 'antd'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onFinish = async formValue => {
    console.log(formValue)
    await dispatch(fetchLogin(formValue))
    navigate('/')
    message.success('登录成功')
  }
  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        {/* 登录表单 */}
        <Form  onFinish={onFinish}>
          <Form.Item
          label="mobile"
          name="mobile"
         
          rules={[
            {
              required: true,
              message: '输入手机号!',
            },
            {
              pattern: /^1[3-9]\d{9}$/,
              message: '手机号格式不正确'
            }
          ]}
          validateTrigger="onBlur"
          >
            <Input size="large" placeholder="请输入手机号" />
          </Form.Item>


          <Form.Item
          label="code"
          name="code"
          rules={[
            {
              required: true,
              message: '输入验证码!',
            },
          ]}
          validateTrigger="onBlur"
          >
            <Input size="large" placeholder="请输入验证码" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login