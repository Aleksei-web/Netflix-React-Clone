import React from 'react'

import faqsData from '../fixtures/faqs.json'
import { Accordion } from '../components'

export function FaqsContainer(): JSX.Element {
	return (
		<Accordion>
			<Accordion.Title>Frequently Asked Questions </Accordion.Title>
			{faqsData.map((item) => (
				<Accordion.Item key={item.id + 's'}>
					<Accordion.Header>{item.header}</Accordion.Header>
					<Accordion.Body>{item.body}</Accordion.Body>
				</Accordion.Item>
			))}
		</Accordion>
	)
}
