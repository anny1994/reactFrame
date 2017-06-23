import React from 'react';
import {
  Layout,
  Breadcrumb
} from 'antd'
import ExpForm from 'components/ExpForm'
import {
  infoFormfield
} from 'constants/constant'
const {
  Content
} = Layout;


class StuIngExp extends React.Component {

  handleSubmit = (data) => {
    console.log(data)
  }

  render() {
    let expInfo = this.props.location.state.expInfo.fqsy ? this.props.location.state.expInfo.fqsy : {}
    return (
      <Layout style={{minHeight:'100%'}}>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '12px 0' }}>
              <Breadcrumb.Item>实验进行中</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: '100%' }}>
              <ExpForm ref="expform" formfield={infoFormfield} formData={expInfo} show={true} submitCallback={this.handleSubmit.bind(this)}/>
            </div>
          </Content>
      </Layout>
    )
  }
}

export default StuIngExp