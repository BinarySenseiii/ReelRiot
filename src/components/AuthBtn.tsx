import { auth, authProvider } from '@/services/firebase'
import { Avatar, Button, Loader, Menu, Stack, Text, rem } from '@mantine/core'
import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { signInWithPopup, signOut } from 'firebase/auth'
import toast from 'react-hot-toast'
import { BiLogOut } from 'react-icons/bi'

const AuthBtn = ({ ...props }) => {
	const [value, loading, error] = useAuthState(auth)

	useEffect(() => {
		if (error) {
			toast.error(error.message)
		}
	}, [error])

	const onSignInHandle = async () => {
		try {
			await signInWithPopup(auth, authProvider)
			toast.success('Successfully logged in.')
		} catch (error) {
			toast.error('Error while logging in. Please try again.')
		}
	}

	const onSignOutHandle = async () => {
		try {
			await signOut(auth)
			toast.success('Successfully logged out.')
		} catch (error) {
			toast.error('Error while logging out. Please try again.')
		}
	}

	return loading ? (
		<Loader variant="oval" size="sm" />
	) : value ? (
		<Menu trigger="hover" withArrow withinPortal zIndex={999} position="bottom-end">
			<Menu.Target>
				<Avatar size="md" radius="xl" src={value.photoURL} alt={`${value.displayName} not found`} />
			</Menu.Target>
			<Menu.Dropdown>
				<Menu.Item disabled>
					<Stack spacing="0">
						<Text fz="xs">{value.displayName}</Text>
						<Text fz="xs" color="dimmed">
							{value.email}
						</Text>
					</Stack>
				</Menu.Item>
				<Menu.Item icon={<BiLogOut size={rem(14)} />} onClick={onSignOutHandle}>
					Sign Out
				</Menu.Item>
			</Menu.Dropdown>
		</Menu>
	) : (
		<Button size="xs" {...props} loading={loading} loaderPosition="center" onClick={onSignInHandle}>
			Login / Sign Up
		</Button>
	)
}

export default AuthBtn
