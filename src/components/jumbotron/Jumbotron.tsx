import React, { ReactNode } from 'react'

import {
	Container,
	Inner,
	Item,
	Pane,
	Title,
	Image,
	SubTitle,
} from './styles/Jumbotron'

interface JProps {
	children?: ReactNode
	direction: string //'column' | 'row' | 'row-reverse'
}

export default function Jumbotron({
	children,
	direction = 'row',
	...restProps
}: JProps): JSX.Element {
	return (
		<Item {...restProps}>
			<Inner direction={direction}>{children}</Inner>
		</Item>
	)
}

interface CProps {
	children: JSX.Element[] | JSX.Element
}

Jumbotron.Container = function JumbotronContainer({
	children,
	...restProps
}: CProps): JSX.Element {
	return <Container {...restProps}>{children}</Container>
}

Jumbotron.Pane = function JumbotronPane({
	children,
	...restProps
}: CProps): JSX.Element {
	return <Pane {...restProps}>{children}</Pane>
}

interface TProps {
	children: string
}

Jumbotron.Title = function JumbotronTitle({
	children,
	...restProps
}: TProps): JSX.Element {
	return <Title {...restProps}>{children}</Title>
}

Jumbotron.SubTitle = function JumbotronSubTitle({
	children,
	...restProps
}: TProps): JSX.Element {
	return <SubTitle {...restProps}>{children}</SubTitle>
}

interface ImgProps {
	alt: string
	src: string
}

Jumbotron.Image = function JumbotronImage({
	...restProps
}: ImgProps): JSX.Element {
	return <Image {...restProps} />
}
