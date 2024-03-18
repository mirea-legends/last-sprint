import HistorySidebar from '../ChatHistorySidebar/HistorySidebar'
import ChatContent from './ChatContent'
import FunctionalTitle from './FunctionalTitle'

function MainChat() {
	const basePath = '../src/assets/'
	return (
		<>
			<main className='app-container rounded-lg bg-zinc-800 flex p-3 w-4/5'>
				<div className='chat flex flex-col justify-between w-full lg:w-2/3'>
					<FunctionalTitle topicName={'Sport'}></FunctionalTitle>
					<ChatContent></ChatContent>
				</div>
				<div className='h-full w-1 bg-zinc-700'></div>
				<HistorySidebar></HistorySidebar>
			</main>
		</>
	)
}

export default MainChat
