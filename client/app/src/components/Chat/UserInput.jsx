import { useEffect, useRef, useState } from 'react'

function UserInput({ text, setText, enterHandler, sendMessageHandler }) {
	const [height, setHeight] = useState('auto')

	const textareaRef = useRef(null)

	useEffect(() => {
		setHeight(`${textareaRef.current.scrollHeight}px`)
	}, [text])

	const handleChange = event => {
		setText(event.target.value)
	}

	return (
		<>
			<div className='user-input flex justify-between rounded bg-gray-500 mt-5'>
				<textarea
					placeholder='Введите запрос'
					className='w-full text-white h-auto p-1 border-none active:border-none bg-gray-500 rounded-l-lg'
					value={text}
					onChange={handleChange}
					onKeyDown={enterHandler}
					ref={textareaRef}
					style={{ height }}
				></textarea>
				<button
					onClick={() => {
						sendMessageHandler()
						setHeight('auto')
					}}
					className='p-1 rounded-lg'
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='currentColor'
						className='w-6 h-6'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5'
						/>
					</svg>
				</button>
			</div>
		</>
	)
}

export default UserInput
