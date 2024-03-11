import './FunctionalButton.jsx'

function SidebarTitle({ logoSrc, squeezeIconSrc }) {
	return (
		<>
			<div className='p-3 sidebar-top flex flex-row items-center'>
				<div className='logo flex-none mr-3'>
					<a href='#'>
						<img src={logoSrc} alt='logo'></img>
					</a>
				</div>
				<button className='squeeze flex-none'>
					<img
						src={squeezeIconSrc}
						alt='squeeze'
						className='icon mr-3 w-4'
					></img>
				</button>
			</div>
		</>
	)
}

export default SidebarTitle
