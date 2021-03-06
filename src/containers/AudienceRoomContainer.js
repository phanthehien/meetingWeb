import React, { Component } from 'react';
import { Divider, Dropdown, Icon, Input, Container, Header } from 'semantic-ui-react';
import HeaderComponent from '../components/HeaderComponent';

const editQuestion = (eventCode, questionId, refreshFn) => {
  alert('you want to edit question', eventCode, questionId);
};

const deleteQuestion = (eventCode, questionId, refreshFn) => {
  fetch(`http://localhost:5000/api/events/${eventCode}/question/${questionId}`, {
    credentials: 'include',
    method: 'DELETE'
  }).then(response => {
    console.log('There is response', response);
    if (response.status >= 200 && response.status < 300) {
      refreshFn();
      return response.json()
    }
    alert('There is error', response);
  }).then(data => {
    console.log('There is data', data);
  });
};


const markEventQuestion = (eventCode, questionId, refreshFn) => {
  fetch(`http://localhost:5000/api/events/${eventCode}/question/${questionId}/highlight`, {
    credentials: 'include',
    method: 'PATCH'
  }).then(response => {
    console.log('There is response', response);
    if (response.status >= 200 && response.status < 300) {
      refreshFn();
      return response.json()
    }
    alert('There is error', response);
  }).then(data => {
    console.log('There is data', data);
  });
};
const DropdownExampleMenuDirection = ({ eventCode, questionId, refreshFn }) => (
  <Dropdown floating button className='icon'>
    <Dropdown.Menu>
      <Dropdown.Item>
        <div  onClick={() => markEventQuestion(eventCode, questionId, refreshFn)}>
          <Icon name='star' />
          <span className='text'>Mark as good</span>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div  onClick={() => editQuestion(eventCode, questionId, refreshFn)}>

        <Icon name='edit' />

        <span className='text'>Edit</span>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div  onClick={() => deleteQuestion(eventCode, questionId, refreshFn)}>

        <Icon name='trash' />
        <span className='text'>Delete</span>
        </div>
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);

const renderEvents = (events, refreshFn) => {
  return events && events.map(event => renderEventQuestions(event, refreshFn));
};

const renderEventQuestions = (event, refreshFn) => {
  const { questions, name, code, good } = event;

  return (
    <div className="ui left aligned container">
      <Header
        as='h2'>
        <Icon name='idea' />
        <Header.Content>
          [{code}] - {name}
        </Header.Content>
      </Header>

      <Header
        style={{ marginBottom: '0' }}
        dividing
        block
        as='h5'>
        <Header.Content>
          Ask the speaker
        </Header.Content>
      </Header>
      <Input
          style={{ margin: '0' }}
          size='massive'
          fluid
          icon='write square'
          iconPosition='left'
          iconColor='red'
          placeholder='Type your question...'
      />
      <Header
        style={{ marginTop: '0' }}

        dividing
        block
        as='h5'>
        <Header.Content>
          {questions.length} question(s)
        </Header.Content>
      </Header>

      <div className="ui very relaxed list">
        {questions && questions.map(question => renderQuestionItem(
          {
            questionItem: question,
            eventCode: code,
            refreshFn,
            good
          }))}
      </div>
    </div>
  );

};

const renderQuestionItem = ({ questionItem, eventCode, refreshFn, good=[] }) => {
  const { questionId, question, likes, createdDateAt, creator } = questionItem;
  const { name } = creator;

  return (
    <div className="item" key={questionId}>
      <div className="ui grid">
        <div className="two wide column center aligned">
          <img className="ui avatar image" src="https://semantic-ui.com/images/avatar/small/elliot.jpg" />
        </div>

        <div className="twelve wide column ">
          <div className="content left aligned">
            <a className="header">
              {
                good.indexOf(questionId) > -1 ?
                  <a className="ui green horizontal label"> Good </a>:
                  null
              }&nbsp;{name}
            </a>
            <div className="description">{createdDateAt}</div>
          </div>
        </div>

        <div className="two wide column left aligned">
          <DropdownExampleMenuDirection
            eventCode={eventCode}
            questionId={questionId}
            refreshFn={refreshFn}
          />
        </div>
        <div className="fifteen wide column">
          <div className="content">{question}</div>
          <Divider />
        </div>
      </div>
    </div>
  );
};

class AudienceRoomContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventCode: 'CB002',
      event: null
    }
  }

  _reloadPage = () => {
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
  };

  componentDidMount() {
    this._reloadPage();
  }

  render() {
    const { event } = this.state;
    return (
      <div>
        <HeaderComponent
          title={'MEETING ROOM'}
          description={'Event topic and questions are shown below'}
          hasManage={false}
          hasNew={false}
        />
        {event && renderEventQuestions(event, this._reloadPage)}
      </div>
    );
  }
}

export default AudienceRoomContainer;
