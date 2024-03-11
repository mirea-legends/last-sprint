import HistoryInfo from './HistoryInfo'
import HistoryNavButton from './HistoryNavButton'
import HistoryTitle from './HistoryTitle'

function HistorySidebar() {
	const basePath = '../src/assets/'
	return (
		<>
			<div className='chat-history-sidebar w-1/3 hidden lg:block'>
				<HistoryTitle profileImgSrc={`${basePath}/image.png`}></HistoryTitle>
				<div className='chat-history-sidebar-content p-3'>
					<HistoryInfo
						messagesCount={3}
						messagesMaxCount={100}
						trashIconSrc={`${basePath}/trash-03.svg`}
					></HistoryInfo>
				</div>

				<div className='chat-history-markers mt-3 flex flex-col'>
					<HistoryNavButton
						title={'Welcome page input'}
						shortContent={'Write code (HTML, CSS and JS) for a...'}
					></HistoryNavButton>
					<HistoryNavButton
						title={'Welcome page input'}
						shortContent={'Write code (HTML, CSS and JS) for a...'}
					></HistoryNavButton>
					<HistoryNavButton
						title={'Welcome page input'}
						shortContent={'Write code (HTML, CSS and JS) for a...'}
					></HistoryNavButton>
				</div>
			</div>
		</>
	)
}

export default HistorySidebar
