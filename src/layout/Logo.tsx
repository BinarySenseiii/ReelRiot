import { Title, useMantineTheme } from '@mantine/core'
import Link from 'next/link'

const Logo = () => {
	const { colors } = useMantineTheme()
	return (
		<Link href="/" className="no-underline">
			<Title fz={30} fw={800} italic>
				REEL<span style={{ color: colors['brand'][4] }}>RIOT</span>
			</Title>
		</Link>
	)
}

export default Logo
