import { Text, Title } from '@mantine/core';
import useStyles from './Welcome.styles';

export default function Welcome() {
  const { classes } = useStyles();

  return (
    <>
      <Title className={classes.title} align="center" mt={100}>
        Movie
        <Text inherit variant="gradient" component="span">
          Site
        </Text>
      </Title>
    </>
  );
}
