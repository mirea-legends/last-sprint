import { useState } from 'react'
import MainChat from '../components/Chat/MainChat'
import FunctionalSidebar from '../components/ChatFunctionalSidebar/FunctionalSidebar'

function ChatPage() {
	const [topic, setTopic] = useState('')
	return (
		<>
			<FunctionalSidebar topic={topic} setTopic={setTopic}></FunctionalSidebar>
			<MainChat topic={topic} setTopic={setTopic}></MainChat>
		</>
	)
}

export default ChatPage
