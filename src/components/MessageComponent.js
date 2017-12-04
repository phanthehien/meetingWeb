import React  from 'react';
import { Message } from 'semantic-ui-react'

const MessageExampleNegative = ({ err = false, text = null }) => (
  err ? <Message negative>
    <Message.Header>{text ? text : 'Your username is not correct'}</Message.Header>
    <p>Please check again </p>
  </Message> : null
);
export default MessageExampleNegative

