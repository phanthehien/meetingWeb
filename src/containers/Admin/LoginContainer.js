import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

const MessageExampleNegative = ({ err = false }) => (
  err ? <Message negative>
    <Message.Header>Your username is not correct</Message.Header>
    <p>Please check again </p>
  </Message> : null
);

class LoginContainer extends Component {

  state = { eventName: '', startDate: '', endDate: '', code: '' };

  _handleChange = (e, params) => {
    const { name, value } = params;
    this.setState({ [name]: value });
  };

  _handleSubmit = (e) => {
    const { history } = this.props;

    e.preventDefault();
    const { username, password } = this.state;

    const authentication = {
      username,
      password
    };
    this.setState({ ['hasError']: false });
    fetch('http://localhost:5000/api/login', {
      method: 'post',
      body: JSON.stringify(authentication)
    }).then(response => {
        if (response.status >= 200 && response.status < 300) {
          return response.json()
        }
        this.setState({ ['hasError']: true });
      })
      .then(user => {
        console.log('There is response', user);
        if (user) {
          history.push('./manage');
        }
      });
  };

  render() {
    const { history } = this.props;
    const { username, password, hasError } = this.state;
    return (
      <div className='login-form'>
        <Grid
          textAlign='center'
          style={{ height: '100%', marginTop: '5%' }}
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              Log-in to Admin page
            </Header>
            <Form size='large'>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='Username'
                  name='username'
                  value={username}
                  onChange={this._handleChange}
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  name='password'
                  value={password}
                  onChange={this._handleChange}
                />

                <Button color='teal' fluid size='large' onClick={this._handleSubmit}>Login</Button>
                <MessageExampleNegative err={hasError} />
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default withRouter(LoginContainer)
