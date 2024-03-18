function FunctionalTitle({ topicName }) {
	const basePath = '../src/assets/'
	return (
		<>
			<div className='chat-title-bar flex flex-row justify-between p-3'>
				<p className='text-white font-sans font-bold text-lg'>{topicName}</p>
				<div className='chat-title-bar-options flex items-center justify-center space-x-2'>
					<button className='chat-title-bar-options-btn'>
						<div className=''>
							<img
								src={`${basePath}/star-01.svg`}
								alt=''
								className='icon w-6'
							></img>
						</div>
					</button>
					<button className='chat-title-bar-options-btn'>
						<div className=''>
							<img
								src={`${basePath}/bookmark.svg`}
								alt=''
								className='icon w-6'
							></img>
						</div>
					</button>
					<button className='chat-title-bar-options-btn'>
						<div className=''>
							<img
								src={`${basePath}/dots-horizontal.svg`}
								alt=''
								className='icon w-6'
							></img>
						</div>
					</button>
				</div>
			</div>
		</>
	)
}

export default FunctionalTitle
