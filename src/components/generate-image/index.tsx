import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import { Configuration, ImagesResponse, OpenAIApi } from 'openai'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const GenerateImageComponent: FC = (): JSX.Element => {
	const [prompt, setPrompt] = useState<any>('')
	const [imageResult, setImageResult] = useState<any>('')
	const [imageSize, setImageSize] = useState<any>('Little')
	const sizeVarian = ['Little', 'Medium', 'Large']

	const configuration = new Configuration({
		organization: 'org-AxqetrZRtjhjoYx8lT55s08i',
		apiKey: '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',
	})

	const openai = new OpenAIApi(configuration)

	const size: any =
		imageSize === 'Little'
			? '256x256'
			: imageSize === 'Medium'
			? '512x512'
			: imageSize === 'Large'
			? '1024x1024'
			: ''

	const generateImage = async () => {
		if (!prompt || prompt.length < 4) return console.log('Error')
		try {
			const response = await toast.promise(
				openai.createImage({
					prompt,
					n: 1,
					size,
				}),
				{
					pending: 'Promise is pending',
					success: 'Promise resolved 👌',
					error: 'Promise rejected 🤯',
				}
			)

			setImageResult(response.data.data[0].url)
			setPrompt('')
		} catch (error) {
			console.log(error)
		}
	}

	const handleSize: any = (item: string) => {
		setImageSize(item)
	}

	return (
		<>
			<section className='flex flex-col justify-center items-center w-full bg-amber-300 h-[400px] '>
				<div className='max-w-[500px] w-full flex justify-center flex-col items-center'>
					<h2 className='font-bold text-[26px] text-stone-800'>
						Describe An Image
					</h2>
					<form className='flex flex-col justify-center gap-4 mt-5 w-full'>
						<input
							onChange={e => setPrompt(e.target.value)}
							className='w-full p-3 rounded-[5px]'
							placeholder='Enter your text...'
						/>
					</form>
					<ul>
						{sizeVarian.map((item, index) => (
							<li onClick={e => handleSize(item)} key={item + index}>
								{item}
							</li>
						))}
					</ul>

					<button
						className='bg-stone-800 py-2 px-6 rounded-[5px] text-white hover:text-blue-400 duration-300 mt-5'
						onClick={generateImage}
					>
						Generate
					</button>
				</div>
			</section>
			<section>
				<div className='px-5 mt-10'>
					<img
						className='w-full h-[550px] p-5 rounded-md border-[1px] border-amber-300'
						src={imageResult}
						alt='Image'
					/>
				</div>
			</section>
		</>
	)
}
