import { FC } from 'react'
import { IPropsLayout } from '../../common/types/layout'
import { Header } from '../header'

export const LayoutComponents: FC<IPropsLayout> = (
	props: IPropsLayout
): JSX.Element => {
	const { children } = props
	return (
		<>
			<Header />
			{children}
		</>
	)
}
