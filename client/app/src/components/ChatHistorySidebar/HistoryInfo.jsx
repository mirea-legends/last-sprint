function HistoryInfo({
	messagesCount,
	setMessagesCount,
	messagesMaxCount,
	trashIconSrc,
}) {
	return (
		<>
			<div className='chat-history-sidebar-title flex flex-row justify-between p-3'>
				<div className='chat-history-info-title flex items-center text-gray-500'>
					<p className='mr-2'>Chat history</p>
					<p className='bg-black p-1 rounded-full flex justify-center'>
						{messagesCount}/{messagesMaxCount}
					</p>
				</div>
				<div className='chat-history-info-delete'>
					<button>
						<img src={trashIconSrc} alt=''></img>
					</button>
				</div>
			</div>
		</>
	)
}

export default HistoryInfo
