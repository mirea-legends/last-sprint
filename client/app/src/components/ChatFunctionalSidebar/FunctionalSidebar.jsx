import ChatsCollections from './ChatsCollections.jsx'
import SidebarOptions from './SIdebarOptions.jsx'
import ShortProfile from './ShortProfile.jsx'
import SidebarTitle from './SidebarTitle.jsx'

function FunctionalSidebar({ topic, setTopic }) {
	return (
		<>
			<aside className='main-sidebar flex-col p-1 hidden xl:flex w-1/5'>
				<SidebarTitle logoSrc={'../src/assets/logo.svg'}></SidebarTitle>
				<SidebarOptions></SidebarOptions>
				<hr className='h-px bg-zinc-700 border-0'></hr>
				<ChatsCollections topic={topic} setTopic={setTopic}></ChatsCollections>
				<ShortProfile
					fullName={'Max Zotov'}
					email={'zotov.max17@mail.ru'}
				></ShortProfile>
			</aside>
		</>
	)
}

export default FunctionalSidebar
