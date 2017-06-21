import React from 'react';
import {
  connect
} from 'react-redux';
import {
  Layout,
  Breadcrumb
} from 'antd'

import ExpForm from 'components/ExpForm'
import {
  formfield
} from 'constants/constant'
const {
  Content
} = Layout;

function mapStateToProps(state) {
  return {

  };
}

class StuIngExp extends React.Component {
  render() {
    return (
      <Layout style={{minHeight:'100%'}}>
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '12px 0' }}>
                <Breadcrumb.Item>实验进行中</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ padding: 24, background: '#fff', minHeight: '100%' }}>
               <ExpForm formfield={formfield}/>
              </div>
            </Content>
          </Layout>
    );
  }
}

export default connect(
  mapStateToProps,
  // Implement map dispatch to props
)(StuIngExp)