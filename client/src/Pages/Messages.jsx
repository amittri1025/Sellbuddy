import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';

import 'stream-chat-react/dist/css/v2/index.css';

const chatClient = new StreamChat('h4vajbr47v4k');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoid2hpdGUtZGF3bi00In0.O8XK2iH1Lx1_8YtQWbdLohbM72_HtgaFaBZawBugmGM';

chatClient.connectUser(
  {
    id: 'white-dawn-4',
    name: 'Amit',
    image: 'https://getstream.io/random_png/?id=white-dawn-4&name=white-dawn-4',
  },
  userToken,
);

const channel = chatClient.channel('messaging', 'custom_channel_id', {
  // add as many custom fields as you'd like
  image: 'https://www.drupal.org/files/project-images/react.png',
  name: 'Sell Furniture',
  members: ['white-dawn-4'],
});


function Messages() {
    return ( 
    <>
    <Chat client={chatClient} theme='str-chat__theme-light'>
        <Channel channel={channel}>
        <Window>
            <ChannelHeader />
            <MessageList />
            <MessageInput />
        </Window>
        <Thread />
        </Channel>
    </Chat>
    </>
     );
}

export default Messages;