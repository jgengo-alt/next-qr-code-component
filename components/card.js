import Image from 'next/image';

export default function Card() {
	return (
		<div className='min-h-96 mx-auto bg-white rounded-2xl p-4 drop-shadow-lg w-80'>
			<Image src='/image-qr-code.png' width={'100'} height={'100'} layout="responsive" className='rounded-xl' />

			<h2 className='text-center text-xl py-6 px-3 font-bold text-c-dark-blue'>
				Improve your front-end skills by building projects
			</h2>

			<p className='text-center px-3 mb-6 text-gray-500'>
				Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
			</p>
		</div>
	)
}
