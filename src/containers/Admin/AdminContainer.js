import React from 'react'
import { Divider, Dropdown, Icon, Button, Container, Header } from 'semantic-ui-react'

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
)

const AdminContainer = () => (
  <div>
    <div class="ui container left aligned" style={{ marginTop: '2em', marginBottom: '2em' }}>
      <Header as='h1'>Manage Events</Header>


      <div class="ui menu">
        <a class="item">New Event</a>
        <a class="item">Manage</a>
        <div class="right menu">
          <a class="item">Sign Out</a>
        </div>
      </div>

      <p>All events will be listed below</p>
    </div>

  <div class="ui left aligned container">
  <div class="ui very relaxed list">

    <div class="item row">
      <div class="ui equal width  grid">
        <div class="two wide column center aligned">
          <img class="ui avatar image" src="https://semantic-ui.com/images/avatar/small/daniel.jpg" />
        </div>

        <div class="twelve wide column ">
          <div class="content left aligned">
            <a class="header">Daniel Lamborghini</a>
            <div class="description">2 <i class="like outline icon"></i> - today, 11:56am</div>
          </div>
        </div>

        <div class="two wide column left aligned">
          <DropdownExampleMenuDirection />
        </div>
        <div class="fifteen wide column">
          <div class="content">Where I can make a purchase online via cashback ?</div>
          <Divider />
        </div>
      </div>
    </div>

    <div class="item">
      <div class="ui grid">
        <div class="two wide column center aligned">
          <img class="ui avatar image" src="https://semantic-ui.com/images/avatar/small/stevie.jpg" />
        </div>

        <div class="twelve wide column ">
          <div class="content left aligned">
            <a class="header">Stevie Feliciano</a>
            <div class="description">0 <i class="like outline icon"></i> - today, 11:56am</div>
          </div>
        </div>

        <div class="two wide column left aligned">
          <DropdownExampleMenuDirection />
        </div>
        <div class="fifteen wide column">
          <div class="content">Are you good ?</div>
          <Divider />
        </div>
      </div>
    </div>

    <div class="item">
      <div class="ui grid">
        <div class="two wide column center aligned">
          <img class="ui avatar image" src="https://semantic-ui.com/images/avatar/small/elliot.jpg" />
        </div>

        <div class="twelve wide column ">
          <div class="content left aligned">
            <a class="header">Elliot Fu</a>
            <div class="description">1 <i class="like outline icon"></i> - today, 11:56am</div>
          </div>
        </div>

        <div class="two wide column left aligned">
          <DropdownExampleMenuDirection />
        </div>
        <div class="fifteen wide column">
          <div class="content">How are you doing ?</div>
          <Divider />
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
);

export default AdminContainer
