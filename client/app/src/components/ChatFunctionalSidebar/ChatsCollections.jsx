import axios from 'axios'
import { useEffect, useRef, useState } from 'react'

function ChatsCollections({ topic, setTopic }) {
	const [collections, setCollections] = useState([])
	const [collectionStyleActive, setCollectionStyleActive] = useState(null)
	const isMounted = useRef(false)

	const handleCollectionBtnClick = id => {
		setCollectionStyleActive(id)
		setTopic(collections.find(collection => collection.id === id).name)
	}

	useEffect(() => {
		if (!isMounted.current) {
			axios
				.get('http://localhost:8080/api/collections/')
				.then(response => {
					let collections_new = []
					response.data.forEach(element => {
						collections_new.push(element)
					})
					setCollections(collections_new)
				})
				.catch(error => {
					console.error(error)
				})
			isMounted.current = true
		}
	}, [collections])

	return (
		<>
			<div
				className='chats-collections mt-5 p-3 flex flex-col text-white'
				role='group'
			>
				{collections.map(collection => {
					return (
						<button
							className={`p-2 rounded cursor-pointer hover:bg-neutral-600 transition-colors duration-200 my-1 ${
								collection.id === collectionStyleActive ? 'bg-zinc-700' : ''
							}`}
							key={collection.id}
							onClick={() => {
								setTopic(collection.name)
								handleCollectionBtnClick(collection.id)
							}}
						>
							<div className='sidebar-options-content flex'>
								{collection.name}
							</div>
						</button>
					)
				})}
			</div>
		</>
	)
}

export default ChatsCollections
