import './FunctionalButton.jsx'

function SidebarTitle({ logoSrc }) {
	return (
		<>
			<div className='p-3 sidebar-top flex flex-row items-center'>
				<div className='logo flex-none mr-3'>
					<a href='#'>
						<img src={logoSrc} alt='logo'></img>
					</a>
				</div>
			</div>
		</>
	)
}

export default SidebarTitle
