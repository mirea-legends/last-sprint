import { useState } from 'react'
import ReactTimeAgo from 'react-time-ago'
import ChatButton from './ChatButton'

function UserMessage({ text, iconSrc }) {
	const [messageTime, setMessageTime] = useState(new Date())
	return (
		<>
			<div className='chat-user-message mt-2'>
				<div className='user-message-text bg-zinc-950 rounded-lg text-white p-5 whitespace-pre-line'>
					<p className='break-words'>{text}</p>
				</div>
				<div className='user-message-actions flex font-sans items-center justify-between mt-2'>
					<div className='llm-message-action-buttons flex items-center space-x-3 text-white'>
						<ReactTimeAgo
							className='text-gray-500'
							date={messageTime}
							locale='en-US'
						></ReactTimeAgo>
						<ChatButton text={'Edit'}></ChatButton>
					</div>
					<div className='user-avatar w-16'>
						<img src={iconSrc} alt='' className='icon rounded-lg'></img>
					</div>
				</div>
			</div>
		</>
	)
}

export default UserMessage
