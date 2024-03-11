function HistoryTitle({ profileImgSrc }) {
	return (
		<>
			<div className='chat-history-sidebar-title flex flex-row justify-evenly p-3'>
				<button className='w-12'>
					<img src={profileImgSrc} alt='' className='rounded-full'></img>
				</button>
				<button className='text-black font-medium bg-white p-1 rounded-lg h-10 w-20 hover:border-2 hover:border-black active:bg-gray-500'>
					Share
				</button>
			</div>
		</>
	)
}

export default HistoryTitle
