import FunctionalButton from './FunctionalButton.jsx'

function SidebarOptions() {
	const basePath = '../src/assets/'
	return (
		<>
			<div className='sidebar-options text-fuchsia-100 mt-5 p-3 flex flex-col'>
				<FunctionalButton
					text={'Chats'}
					iconSrc={`${basePath}/chat-text.1 1.svg`}
				></FunctionalButton>
				<FunctionalButton
					text={'Search'}
					iconSrc={`${basePath}/search 1.svg`}
				></FunctionalButton>
				<FunctionalButton
					text={'Manage Subscription'}
					iconSrc={`${basePath}/bank-card-check-ou-lc 1.svg`}
				></FunctionalButton>
				<FunctionalButton
					text={'Updates & FAQ'}
					iconSrc={`${basePath}/barcode.2 1.svg`}
				></FunctionalButton>
				<FunctionalButton
					text={'Settings'}
					iconSrc={`${basePath}/settings 1.svg`}
				></FunctionalButton>
			</div>
		</>
	)
}

export default SidebarOptions
