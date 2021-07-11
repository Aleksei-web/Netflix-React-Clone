import React, { ReactNode } from 'react'

import {
	Container,
	Row,
	Column,
	Link,
	Title,
	Text,
	Break,
} from './styles/footer'

interface FooterProps {
	children: JSX.Element[]
}

export default function Footer({ children, ...restProps }: FooterProps) {
	return <Container {...restProps}>{children}</Container>
}

interface RowProps {
	children: JSX.Element[]
}

Footer.Row = function FooterRow({ children, ...restProps }: RowProps) {
	return <Row {...restProps}>{children}</Row>
}

interface ColProps {
	children: JSX.Element[]
}

Footer.Column = function FooterColumn({ children }: ColProps): JSX.Element {
	return <Column>{children}</Column>
}

interface LinkProps {
	children: ReactNode
	href: string
}

Footer.Link = function FooterLink({
	children,
	...restProps
}: LinkProps): JSX.Element {
	return <Link {...restProps}>{children}</Link>
}

interface TitleProps {
	children: ReactNode
}

Footer.Title = function FooterTitle({
	children,
	...restProps
}: TitleProps): JSX.Element {
	return <Title {...restProps}>{children}</Title>
}

Footer.Text = function FooterText({
	children,
	...restProps
}: TitleProps): JSX.Element {
	return <Text {...restProps}>{children}</Text>
}

Footer.Break = function FooterBreak({ ...restProps }) {
	return <Break {...restProps} />
}
