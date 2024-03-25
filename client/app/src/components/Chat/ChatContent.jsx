import { useState } from 'react'
import socket from '../../../api/instances'
import NavButton from '../../../helpers/Structures'
import ChatCheckBox from './ChatCheckBox/ChatCheckBox'
import ChatInputRange from './ChatInputRange/ChatInputRange'
import LlmMessage from './LlmMessage'
import UserInput from './UserInput'
import UserMessage from './UserMessage'

function ChatContent({
	messagesCount,
	setMessagesCount,
	messagesHistory,
	setMessagesHistory,
}) {
	const basePath = '../src/assets/'
	const [messages, setMessages] = useState([])
	const [numbersOfResults, setNumbersOfResults] = useState(1)
	const [memoryAccessThreshold, setMemoryAccessThreshold] = useState(0.1)
	const [text, setText] = useState('')
	const [useVectorDatabase, setUseVectorDatabase] = useState(false)

	socket.onmessage = data => {
		const preparedData = JSON.parse(data.data)
		setMessages(prevMessages => [...prevMessages, data])
		setMessagesCount(messagesCount + 1)
		const shortMessageContent = preparedData.message.slice(0, 45) + '...'
		const navBtn = new NavButton('[Message topic]', shortMessageContent)
		messagesHistory.push(navBtn)
	}

	const handleSendMessage = () => {
		if (text) {
			const data = JSON.stringify({
				message: text,
				message_belonging: 'USER',
				n_results: numbersOfResults,
				memory_access_threshold: memoryAccessThreshold,
				use_db: useVectorDatabase,
			})
			socket.send(data)
			setMessages(prevMessages => [
				...prevMessages,
				new MessageEvent('message', { data: data }),
			])
			setText('')
		}
	}

	const onEnterClicked = e => {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault()
			handleSendMessage()
		}
	}

	let llmMessageCounter = 0

	return (
		<>
			<div className='chat-content p-3'>
				{messages.map((message, index) => {
					const current_message_data = JSON.parse(message.data)
					if (current_message_data.message_belonging === 'LLM')
						return (
							<LlmMessage
								key={index}
								messageId={`llm-message-${llmMessageCounter++}`}
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
				<UserInput
					text={text}
					setText={setText}
					enterHandler={onEnterClicked}
					sendMessageHandler={handleSendMessage}
				></UserInput>
				<div className='block md:flex md:space-x-10'>
					<ChatInputRange
						labelText={'n_results'}
						minValue={1}
						maxValue={10}
						step={1}
						parentValue={numbersOfResults}
						setParentValue={setNumbersOfResults}
					></ChatInputRange>
					<ChatInputRange
						labelText={'memory_access_threshold'}
						minValue={1}
						maxValue={2.0}
						step={0.1}
						parentValue={memoryAccessThreshold}
						setParentValue={setMemoryAccessThreshold}
					></ChatInputRange>
				</div>
				<div className='flex justify-center mt-5'>
					<ChatCheckBox
						checked={useVectorDatabase}
						setChacked={setUseVectorDatabase}
						title={'Использовать векторную БД'}
					></ChatCheckBox>
				</div>
			</div>
		</>
	)
}

export default ChatContent
