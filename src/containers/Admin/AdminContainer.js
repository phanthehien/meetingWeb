import React, { Component } from 'react';
import { Divider, Dropdown, Icon, Button, Container, Header } from 'semantic-ui-react';

const DropdownExampleMenuDirection = () => (
  <Dropdown floating button className='icon'>
    <Dropdown.Menu>
      <Dropdown.Item>
        <Icon name='star' />
        <span className='text'>Mark as good</span>
      </Dropdown.Item>
      <Dropdown.Item>
        <Icon name='edit' />
        <span className='text'>Edit</span>
      </Dropdown.Item>
      <Dropdown.Item>
        <Icon name='trash' />
        <span className='text'>Delete</span>
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);

const renderEventQuestions = (event) => {
  const { questions } = event;

  return (
    <div class="ui left aligned container">
      <div class="ui very relaxed list">
        {questions && questions.map(question => renderQuestionItem(question))}
      </div>
    </div>
  );

};

const renderQuestionItem = (questionItem) => {
  const { questionId, question, likes, createdDateAt, creator } = questionItem;
  const { name } = creator;

  return (
    <div class="item" key={questionId}>
      <div class="ui grid">
        <div class="two wide column center aligned">
          <img class="ui avatar image" src="https://semantic-ui.com/images/avatar/small/elliot.jpg" />
        </div>

        <div class="twelve wide column ">
          <div class="content left aligned">
            <a class="header">{name}</a>
            <div class="description">{likes.length} <i class="like outline icon"></i> - {createdDateAt}</div>
          </div>
        </div>

        <div class="two wide column left aligned">
          <DropdownExampleMenuDirection />
        </div>
        <div class="fifteen wide column">
          <div class="content">{question}</div>
          <Divider />
        </div>
      </div>
    </div>
  );
};

const renderMenu = () => {
  return (
    <div class="ui menu">
      <a class="item">New Event</a>
      <a class="item">Manage</a>
      <div class="right menu">
        <a class="item">Sign Out</a>
      </div>
    </div>
  );
};

const renderHeader = () => (
  <div class="ui container left aligned" style={{ marginTop: '2em', marginBottom: '2em' }}>
  <Header as='h1'>Manage Events</Header>
    {renderMenu()}
    <p>All events will be listed below</p>
  </div>
);

class AdminContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: { },
      eventCode: 'CB002'
    }
  }

  componentDidMount() {
    const { eventCode } = this.state;
    const url = `http://localhost:5000/api/events/${eventCode}`;
    return fetch(url)
      .then((response) => response.json())
      .then((event) => {
        this.setState({ event });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { event } = this.state;
    console.log(event);

    return (
      <div>
        {renderHeader()}
        {renderEventQuestions(event)}
      </div>
    );
  }
}

export default AdminContainer;
