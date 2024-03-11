function ChatButton({ text }) {
	return (
		<>
			<button className='message-copy-btn bg-black p-1 rounded-lg text-sm hover:border hover:border-white'>
				{text}
			</button>
		</>
	)
}

export default ChatButton
