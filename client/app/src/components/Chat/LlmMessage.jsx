import ReactTimeAgo from 'react-time-ago'
import ChatButton from './ChatButton'
import FeedbackButtons from './FeedbackButtons'

function LlmMessage({ text, iconSrc }) {
	return (
		<>
			<div className='chat-llm-message mt-2'>
				<div className='llm-message-text bg-zinc-950 rounded-lg text-white p-5'>
					<p className='break-words'>{text}</p>
				</div>
				<div className='llm-message-actions flex font-sans items-center justify-between mt-1'>
					<div className='llm-avatar'>
						<img src={iconSrc} alt='' className='icon'></img>
					</div>
					<div className='llm-message-action-buttons flex items-center space-x-3 text-white'>
						<ReactTimeAgo
							className='text-gray-500'
							date={new Date()}
							locale='en-US'
						></ReactTimeAgo>
						<ChatButton text={'Copy'}></ChatButton>
						<ChatButton text={'Regenerate response'}></ChatButton>
						<FeedbackButtons></FeedbackButtons>
					</div>
				</div>
			</div>
		</>
	)
}

export default LlmMessage
