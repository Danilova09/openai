import { FC } from 'react'

export const Header: FC = (): JSX.Element => {
	return (
		<header className='p-5 md:p-6 flex justify-between items-center bg-stone-800 text-white'>
			<h1 className='font-bold text-[18px] md:text-[24px]'>
				Open AI Image Generator
			</h1>
			<a
				className='font-medium text-[12px] md:text-[14px] hover:text-blue-400 duration-300'
				href='https://beta.openai.com/overview'
				target={'_blank'}
			>
				Open AI Docs
			</a>
		</header>
	)
}
