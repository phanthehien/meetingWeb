import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { withRouter } from 'react-router-dom'

import HeaderComponent from '../../components/HeaderComponent';
import { Button, Form, Icon, Header, Image, Message, Segment } from 'semantic-ui-react'


class AdminContainer extends Component {

  state = { eventName: '', startDate: '', endDate: '', code: '' };

  _handleChange = (e, params) => {
    const { name, value } = params;
    this.setState({ [name]: value });
  };

  _handleDateChangeStart = (date) => {
    this.setState({
      startDate: date
    });
  };

  _handleChangeEnd = (date) => {
    this.setState({
      endDate: date
    });
  };

  _handleSubmit = (e) => {
    e.preventDefault();
    const { eventName, eventCode, startDate, endDate } = this.state;
    const { history } = this.props;
    const event = {
      name: eventName,
      start: startDate.toISOString(),
      end: endDate.toISOString(),
      code: eventCode
    };

    fetch('http://localhost:5000/api/events', {
      credentials: 'include',
      method: 'post',
        body: JSON.stringify(event)
      }).then(response => {
        console.log('There is response', response);
        if (response.status >= 200 && response.status < 300) {
          return response.json()
        }
      }).then(data => {
        history.push('./manage');
    });

    return false;
  };

  render() {
    const { eventName, eventCode, startDate, endDate } = this.state;

    return (
      <div className="ui container left aligned" style={{ marginTop: '2em', marginBottom: '2em' }}>
        <HeaderComponent title={'Create event'} description={'Please input event detail'} />

        <form className="ui form center" onSubmit={this._handleSubmit} >
          <Segment stacked>

          <div className="field">
            <label>Name</label>
            <Form.Input
              fluid
              icon='newspaper'
              iconPosition='left'
              placeholder='Event name'
              name='eventName'
              value={eventName}
              onChange={this._handleChange}
            />
          </div>
            <div className="field">
              <label>Code</label>
              <Form.Input
                fluid
                icon='qrcode'
                iconPosition='left'
                placeholder='Event code'
                name='eventCode'
                value={eventCode}
                onChange={this._handleChange}
              />
            </div>

          <div className="two fields">
            <div className="field">
            <label icon='calendar'>Start date</label>
            <DatePicker
              selectsStart
              name='startDate'
              selected={startDate}
              startDate={startDate}
              endDate={endDate}
              onChange={this._handleDateChangeStart}
              placeholderText="Start date"
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={30}
              dateFormat="DD/MM/Y HH:mm"
            />
          </div>
            <div className="field">
              <label>End date</label>
              <DatePicker
                selectsEnd
                name='endDate'
                selected={endDate}
                startDate={startDate}
                endDate={endDate}
                onChange={this._handleChangeEnd}
                placeholderText="End date"
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={30}
                dateFormat="DD/MM/Y HH:mm"
              />
            </div>
          </div>
            <Button color='teal' size='large' type='submit'>Create event</Button>
            <div className="ui error message"></div>
          </Segment>
        </form>

      </div>
    );
  }
}

export default withRouter(AdminContainer);
