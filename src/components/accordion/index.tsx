import React, { createContext, ReactNode, useContext, useState } from 'react'

import { Container, Title, Item, Inner, Header, Body } from './styles/accordion'

type ContextProps = {
	toggleShow: boolean
	setToggleShow: (value: boolean | ((prevVar: boolean) => boolean)) => void
}

const ToggleContext = createContext<ContextProps>({
	toggleShow: false,
	setToggleShow(prev) {
		return !prev
	},
})

const useToggleContext = () => useContext(ToggleContext)

interface AccProps {
	children: JSX.IntrinsicAttributes
}

export default function Accordion({ children }: AccProps): JSX.Element {
	return (
		<Container>
			<Inner>{children}</Inner>
		</Container>
	)
}

interface TitleProps {
	children: ReactNode
}

Accordion.Title = function AccordionTitle({
	children,
}: TitleProps): JSX.Element {
	return <Title>{children}</Title>
}

interface ItemProps {
	children: JSX.Element[]
	key: string
}

Accordion.Item = function AccordionItem({ children }: ItemProps): JSX.Element {
	const [toggleShow, setToggleShow] = useState<boolean>(false)

	return (
		<ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
			<Item>{children}</Item>
		</ToggleContext.Provider>
	)
}

interface HeaderProps {
	children: ReactNode
}

Accordion.Header = function AccordionHeader({
	children,
}: HeaderProps): JSX.Element {
	const { toggleShow, setToggleShow }: ContextProps = useToggleContext()

	return (
		<Header onClick={() => setToggleShow((toggleShow) => !toggleShow)}>
			{children}
			{toggleShow ? (
				<img src="source/icons/close-slim.png" alt="close" />
			) : (
				<img src="source/icons/add.png" alt="close" />
			)}
		</Header>
	)
}

interface BodyProps {
	children: ReactNode
}

Accordion.Body = function AccordionBody({ children }: BodyProps) {
	const { toggleShow } = useToggleContext()

	return toggleShow ? <Body>{children}</Body> : null
}
