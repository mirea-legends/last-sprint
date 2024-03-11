import Generator from '../../../helpers/Generator.js'
import ChatsCollections from './ChatsCollections.jsx'
import SidebarOptions from './SIdebarOptions.jsx'
import ShortProfile from './ShortProfile.jsx'
import SidebarTitle from './SidebarTitle.jsx'

function FunctionalSidebar() {
	return (
		<aside className='main-sidebar flex-col p-1 hidden xl:flex w-1/5'>
			<SidebarTitle
				logoSrc={'../src/assets/logo.svg'}
				squeezeIconSrc={'../src/assets/Collapse icon.svg'}
			></SidebarTitle>
			<SidebarOptions></SidebarOptions>
			<hr className='h-px bg-zinc-700 border-0'></hr>
			<ChatsCollections></ChatsCollections>
			<ShortProfile
				fullName={Generator.getString(50)}
				email={Generator.getString(50)}
			></ShortProfile>
		</aside>
	)
}

export default FunctionalSidebar
