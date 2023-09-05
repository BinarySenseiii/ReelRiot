/* eslint-disable react/no-unescaped-entities */
import { Container, Title, Accordion, createStyles, rem } from '@mantine/core'

const useStyles = createStyles(theme => ({
	title: {
		marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
	},

	item: {
		borderRadius: theme.radius.md,
		marginBottom: theme.spacing.lg,
		border: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]}`,
	},
}))

export default function Faq() {
	const { classes } = useStyles()

	return (
		<Container size="md" className="w-full py-8">
			<Title align="center" className={classes.title}>
				Frequently Asked Questions
			</Title>

			<Accordion variant="separated">
				<Accordion.Item className={classes.item} value="reset-password">
					<Accordion.Control>How can I reset my password?</Accordion.Control>
					<Accordion.Panel>
						Your password can be reset by visiting the "Forgot Password" page and following the instructions provided
						there.
					</Accordion.Panel>
				</Accordion.Item>

				<Accordion.Item className={classes.item} value="another-account">
					<Accordion.Control>Can I create more than one account?</Accordion.Control>
					<Accordion.Panel>
						No, our system allows only one account per user. Multiple accounts are not allowed.
					</Accordion.Panel>
				</Accordion.Item>

				<Accordion.Item className={classes.item} value="newsletter">
					<Accordion.Control>How can I subscribe to the monthly newsletter?</Accordion.Control>
					<Accordion.Panel>
						To subscribe to our monthly newsletter, go to your account settings and select the "Subscribe to Newsletter"
						option.
					</Accordion.Panel>
				</Accordion.Item>

				<Accordion.Item className={classes.item} value="credit-card">
					<Accordion.Control>Do you store credit card information securely?</Accordion.Control>
					<Accordion.Panel>
						Yes, we take security seriously. Your credit card information is encrypted and stored securely in compliance
						with industry standards.
					</Accordion.Panel>
				</Accordion.Item>

				<Accordion.Item className={classes.item} value="payment">
					<Accordion.Control>What payment systems do you work with?</Accordion.Control>
					<Accordion.Panel>
						We accept payments through major credit cards like Visa, MasterCard, and American Express, as well as
						popular online payment systems like PayPal.
					</Accordion.Panel>
				</Accordion.Item>
			</Accordion>
		</Container>
	)
}
