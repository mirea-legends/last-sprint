function ChatButton({ text, clickHandler }) {
	return (
		<>
			<button
				className='message-copy-btn bg-black p-1 rounded-lg text-sm hover:border hover:border-white'
				onClick={clickHandler}
			>
				{text}
			</button>
		</>
	)
}

export default ChatButton
