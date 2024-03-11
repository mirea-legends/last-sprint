function ChatsCollections() {
	return (
		<>
			<div className='chats-collections mt-5 p-3 flex flex-col text-white'>
				<button className='collection-sport p-2 rounded cursor-pointer hover:bg-neutral-600 transition-colors duration-200 my-1 active:bg-black'>
					<div className='sidebar-options-content flex'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='currentColor'
							className='w-6 h-6 mr-3'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5'
							/>
						</svg>
						Science
					</div>
				</button>
				<button className='collection-sport p-2 bg-zinc-700 rounded my-1'>
					<div className='sidebar-options-content flex'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='currentColor'
							className='w-6 h-6 mr-3'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
							/>
						</svg>
						Sport
					</div>
				</button>
			</div>
		</>
	)
}

export default ChatsCollections
