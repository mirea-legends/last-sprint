import { useState } from 'react'
import socket from '../../../api/socket'
import LlmMessage from './LlmMessage'
import UserInput from './UserInput'
import UserMessage from './UserMessage'

function ChatContent() {
	const basePath = '../src/assets/'
	const [messages, setMessages] = useState([])

	socket.onmessage = data => {
		setMessages(prevMessages => [...prevMessages, data])
	}
	return (
		<>
			<div className='chat-content p-3'>
				{messages.map((message, index) => {
					const current_message_data = JSON.parse(message.data)
					if (current_message_data.message_belonging === 'LLM')
						return (
							<LlmMessage
								key={index}
								text={current_message_data.message}
								iconSrc={`${basePath}/Avatar.svg`}
							></LlmMessage>
						)
					else if (current_message_data.message_belonging === 'USER')
						return (
							<UserMessage
								key={index}
								text={current_message_data.message}
								iconSrc={`${basePath}/image.png`}
							></UserMessage>
						)
				})}
				<UserInput setChatMessages={setMessages}></UserInput>
			</div>
		</>
	)
}

export default ChatContent
