function FunctionalButton({ text, iconSrc }) {
	return (
		<button className='sidebar-options-chats text-white p-2 rounded cursor-pointer hover:bg-neutral-600 transition-colors duration-200 my-1 active:bg-black'>
			<div className='sidebar-options-content flex'>
				<img src={iconSrc} alt='' className='icon mr-3 w-6'></img>
				{text}
			</div>
		</button>
	)
}

export default FunctionalButton
