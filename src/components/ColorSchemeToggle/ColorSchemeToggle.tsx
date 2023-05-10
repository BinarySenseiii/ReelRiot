import { ActionIcon, Group, useMantineColorScheme } from '@mantine/core';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

export default function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group position="left" h="full">
      <ActionIcon
        onClick={() => toggleColorScheme()}
        size="xl"
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
          color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
        })}
      >
        {colorScheme === 'dark' ? (
          <BsFillSunFill fontSize={20} />
        ) : (
          <BsFillMoonStarsFill fontSize={20} />
        )}
      </ActionIcon>
    </Group>
  );
}
