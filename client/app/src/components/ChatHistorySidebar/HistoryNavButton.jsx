function HistoryNavButton({ title, shortContent }) {
	return (
		<>
			<button className='marker-btn hover:bg-neutral-600 transition-colors duration-200 rounded-lg focus:outline-none focus:shadow-outline active:bg-zinc-900 ease-in-out'>
				<div className='marker-btn-content p-3'>
					<p className='text-white font-medium'>{title}</p>
					<p className='text-gray-500'>
						{shortContent}
					</p>
				</div>
			</button>
		</>
	)
}

export default HistoryNavButton
