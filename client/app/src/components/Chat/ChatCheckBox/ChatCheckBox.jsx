import './Styles.css'

function ChatCheckBox({ checked, setChacked, title }) {
	const changeStatus = () => {
		setChacked(!checked)
	}
	return (
		<>
			<label className='checkbox style-e'>
				<input type='checkbox' value={checked} onChange={changeStatus} />
				<div className='checkbox__checkmark'></div>
				<div className='checkbox__body text-white'>{title}</div>
			</label>
		</>
	)
}

export default ChatCheckBox
