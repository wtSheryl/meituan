import React, { Component } from 'react';
import { Modal, Form, Input, Icon } from 'antd';

class Login extends Component {

	handleLoginOk = () => {
		this.props.handleOk();
	}

	handleLoginCancel = () => {
		this.props.handleCancel();
	}

	render() {

		return(
			<Modal width= "450px"
			  title="登录"
			  okText="确认"
			  cancelText="取消"
			  visible={ this.props.visible }
			  onOk={ this.handleLoginOk }
			  confirmLoading = { this.props.confirmLoading }
			  onCancel={ this.handleLoginCancel }
			>
				<Form className="login-form">
					<Form.Item>
						<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
					</Form.Item>
					<Form.Item>
						<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
					</Form.Item>
				</Form>
			</Modal>
		)
	}
}
export default Login;