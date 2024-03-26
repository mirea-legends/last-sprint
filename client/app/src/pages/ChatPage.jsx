import { useState } from 'react'
import MainChat from '../components/Chat/MainChat'
import FunctionalSidebar from '../components/ChatFunctionalSidebar/FunctionalSidebar'

function ChatPage() {
	const [chatRender, setChatRender] = useState(false)
	const [topic, setTopic] = useState('')
	return (
		<>
			<div className='main flex justify-center'>
				<FunctionalSidebar
					topic={topic}
					setTopic={setTopic}
					chatRender={chatRender}
					setChatRender={setChatRender}
				></FunctionalSidebar>
				<MainChat
					topic={topic}
					setTopic={setTopic}
					chatRender={chatRender}
					setChatRender={setChatRender}
				></MainChat>
			</div>
		</>
	)
}

export default ChatPage
