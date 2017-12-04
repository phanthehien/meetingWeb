import React  from 'react';
import { Header } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom'

const MenuComponent = (props) => {
  return (
    <div className="ui menu">
      <a className="item" onClick={() => { props.history.replace('./create') }}>New Event</a>
      <a className="item" onClick={() => { props.history.replace('./manage') }}>Manage</a>
      <div className="right menu">
        <a className="item" onClick={() => { props.history.replace('./login') }}>Sign Out</a>
      </div>
    </div>
  );
};
const HeaderComponent = withRouter((props) => {
  const { title, description } = props;
  return (
    <div className="ui container left aligned" style={{ marginTop: '2em', marginBottom: '2em' }}>
      <Header as='h1'>{title}</Header>
      <MenuComponent {...props} />
      <p>{description}</p>
    </div>
  );
});

export default HeaderComponent

