import HistoryInfo from './HistoryInfo'
import HistoryNavButton from './HistoryNavButton'
import HistoryTitle from './HistoryTitle'

function HistorySidebar({
	messagesCount,
	setMessagesCount,
	messagesHistory,
	setMessagesHistory,
}) {
	const basePath = '../src/assets/'
	return (
		<>
			<div className='chat-history-sidebar w-1/3 hidden lg:block'>
				<HistoryTitle profileImgSrc={`${basePath}/image.png`}></HistoryTitle>
				<div className='chat-history-sidebar-content p-3'>
					<HistoryInfo
						messagesCount={messagesCount}
						setMessagesCount={setMessagesCount}
						messagesMaxCount={100}
						trashIconSrc={`${basePath}/trash-03.svg`}
					></HistoryInfo>
				</div>

				<div className='chat-history-markers mt-3 flex flex-col'>
					{messagesHistory.map((navMessageBtn, index) => {
						return (
							<HistoryNavButton
								key={index}
								title={navMessageBtn.title}
								shortContent={navMessageBtn.shortContent}
								refsTo={`llm-message-${index}`}
							></HistoryNavButton>
						)
					})}
				</div>
			</div>
		</>
	)
}

export default HistorySidebar
