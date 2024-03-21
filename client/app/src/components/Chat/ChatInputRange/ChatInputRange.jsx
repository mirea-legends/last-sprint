import './Styles.css'

function ChatInputRange({
	labelText,
	minValue,
	maxValue,
	step,
	parentValue,
	setParentValue,
}) {
	const handleChangeRange = e => {
		setParentValue(e.target.value)
	}

	return (
		<>
			<div className='slidecontainer mt-5 w-1/2'>
				<label htmlFor='myRange' className='text-white'>
					{`${labelText}: ${parentValue}`}
				</label>
				<input
					type='range'
					min={minValue}
					max={maxValue}
					value={parentValue}
					step={step}
					className='slider'
					id='myRange'
					onChange={e => handleChangeRange(e)}
				></input>
			</div>
		</>
	)
}

export default ChatInputRange
