import Generator from '../../../helpers/Generator'
import LlmMessage from './LlmMessage'
import UserInput from './UserInput'
import UserMessage from './UserMessage'

function ChatContent() {
	const basePath = '../src/assets/'
	return (
		<>
			<div className='chat-content p-3'>
				<LlmMessage
					text={Generator.getString(1024)}
					iconSrc={`${basePath}/Avatar.svg`}
				></LlmMessage>
				<UserMessage
					text={Generator.getString(1024)}
					iconSrc={`${basePath}/image.png`}
				></UserMessage>
				<UserInput></UserInput>
			</div>
		</>
	)
}

export default ChatContent
