import React from 'react'
import { Divider, Dropdown, Icon, Button } from 'semantic-ui-react'


const style = {
  plainContainer: {
    padding: 20,
    border: 1
  },
};

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
  <div class="ui left aligned container" style={style.plainContainer}>
  <div class="ui very relaxed list">

    <div class="item">
      <div class="ui grid">
        <div class="one wide column">
          <img class="ui avatar image" src="https://semantic-ui.com/images/avatar/small/daniel.jpg" />
        </div>

        <div class="eight wide column ">
          <div class="content left aligned">
            <a class="header">Daniel Lamborghini</a>
            <div class="description">2 <i class="like outline icon"></i> - today, 11:56am</div>
          </div>
        </div>

        <div class="one wide column">
          <DropdownExampleMenuDirection />
        </div>
        <div class="ten wide column">
          <div class="content">Where I can make a purchase online via cashback ?</div>
          <Divider inverted />
        </div>
      </div>
    </div>

    <div class="item">
      <div class="ui grid">
        <div class="one wide column">
          <img class="ui avatar image" src="https://semantic-ui.com/images/avatar/small/stevie.jpg" />
        </div>

        <div class="eight wide column ">
          <div class="content left aligned">
            <a class="header">Stevie Feliciano</a>
            <div class="description">0 <i class="like outline icon"></i> - today, 11:56am</div>
          </div>
        </div>

        <div class="one wide column">
          <DropdownExampleMenuDirection />
        </div>
        <div class="ten wide column">
          <div class="content">Are you good ?</div>
          <Divider inverted />
        </div>
      </div>
    </div>

    <div class="item">
      <div class="ui grid">
        <div class="one wide column">
          <img class="ui avatar image" src="https://semantic-ui.com/images/avatar/small/elliot.jpg" />
        </div>

        <div class="eight wide column ">
          <div class="content left aligned">
            <a class="header">Elliot Fu</a>
            <div class="description">1 <i class="like outline icon"></i> - today, 11:56am</div>
          </div>
        </div>

        <div class="one wide column">
          <DropdownExampleMenuDirection />
        </div>
        <div class="ten wide column">
          <div class="content">How are you doing ?</div>
          <Divider inverted />
        </div>
      </div>
    </div>
  </div>
  </div>
);

export default AdminContainer
