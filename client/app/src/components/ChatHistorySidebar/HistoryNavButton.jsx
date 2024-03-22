import 'animate.css'

function HistoryNavButton({ title, shortContent, refsTo }) {
	return (
		<>
			<button className='animate__animated animate__flash marker-btn hover:bg-neutral-600 transition-colors duration-200 rounded-lg focus:outline-none focus:shadow-outline active:bg-zinc-900 ease-in-out'>
				<a href={`#${refsTo}`}>
					<div className='marker-btn-content p-3'>
						<p className='text-white font-medium'>{title}</p>
						<p className='text-gray-500'>{shortContent}</p>
					</div>
				</a>
			</button>
		</>
	)
}

export default HistoryNavButton
