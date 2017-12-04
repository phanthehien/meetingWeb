import React  from 'react';
import { Header } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom'

const MenuComponent = (props) => {
  const { hasNew = true, hasManage = true } = props;
  return (
    <div className="ui menu">
      { hasNew && <a className="item" onClick={() => { props.history.replace('./create') }}>New Event</a>}
      { hasManage && <a className="item" onClick={() => { props.history.replace('./manage') }}>Manage</a>}
      { !hasNew && !hasManage &&
        <a
          className="item"
          onClick={() => { props.history.replace('./room') }}
        >
          Room
        </a>}
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

