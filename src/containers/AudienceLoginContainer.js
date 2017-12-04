import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

import MessageExampleNegative from '../components/MessageComponent'

class AudienceLoginContainer extends Component {

  state = { eventName: '', startDate: '', endDate: '', code: '' };

  _handleChange = (e, params) => {
    const { name, value } = params;
    this.setState({ [name]: value });
  };

  _handleSubmit = (e) => {
    const { history } = this.props;

    e.preventDefault();
    const { eventCode } = this.state;

    this.setState({ ['hasError']: false });
    fetch(`http://localhost:5000/api/event/${eventCode}/login`, {
      method: 'GET'
    }).then(response => {
      if (response.status >= 200 && response.status < 300) {
        return response.json()
      }
      this.setState({ ['hasError']: true });
    })
      .then(user => {
        console.log('There is response', user);
        if (user) {
          history.push('./room');
        }
      });
  };

  render() {
    const { eventCode, hasError } = this.state;

    return (
      <div className='login-form'>
        <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
        <Grid
          textAlign='center'
          style={{ height: '100%' }}
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='green' textAlign='center'>
              Meeting Up Online
            </Header>
            <Form size='large'>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon='ticket'
                  iconPosition='left'
                  placeholder='Please input event code to start'
                  name='eventCode'
                  value={eventCode}
                  onChange={this._handleChange}
                />

                <Button color='green' fluid size='large' onClick={this._handleSubmit}>Login</Button>
                <MessageExampleNegative err={hasError} text={'The event code is not correct.'} />

              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default withRouter(AudienceLoginContainer)
