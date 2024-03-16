function ShortProfile(props) {
	const basePath = '../src/assets/image.png'
	return (
		<>
			<div className='mt-5 p-3'>
				<div className='short-profile mt-10 flex flex-col p-3 bg-zinc-800 rounded-lg'>
					<div className='flex justify-center'>
						<img src={basePath} alt='' className='icon rounded-full w-12'></img>
					</div>
					<div className='short-profile-content my-1 space-y-5 text-center block'>
						<div className='user-data mr-3 w-full'>
							<p className='text-white break-words'>{props.fullName}</p>
							<p className='text-gray-500 break-words'>{props.email}</p>
						</div>
						<div className='subscription-status bg-green-500 font-semibold p-2 h-1/2 rounded-lg'>
							<p>Free</p>
						</div>
					</div>
					<button className='text-white mt-5 font-semibold border-2 rounded-lg p-3 border-zinc-700 hover:bg-neutral-600 transition-colors duration-200 active:bg-zinc-800'>
						Upgrade to PRO
					</button>
				</div>
			</div>
		</>
	)
}

export default ShortProfile
