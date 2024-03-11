function FunctionalTitle({ favoriteIconSrc, bookmarkIconSrc, moreIconSrc }) {
	return (
		<>
			<div className='chat-title-bar flex flex-row justify-between p-3'>
				<p className='text-white font-sans font-bold text-lg'>Topic</p>
				<div className='chat-title-bar-options flex items-center justify-center space-x-2'>
					<button className='chat-title-bar-options-btn'>
						<div className=''>
							<img src={favoriteIconSrc} alt='' className='icon w-6'></img>
						</div>
					</button>
					<button className='chat-title-bar-options-btn'>
						<div className=''>
							<img src={bookmarkIconSrc} alt='' className='icon w-6'></img>
						</div>
					</button>
					<button className='chat-title-bar-options-btn'>
						<div className=''>
							<img src={moreIconSrc} alt='' className='icon w-6'></img>
						</div>
					</button>
				</div>
			</div>
		</>
	)
}

export default FunctionalTitle
