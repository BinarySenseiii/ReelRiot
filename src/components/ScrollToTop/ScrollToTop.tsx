import { IconArrowUp } from '@tabler/icons';
import { useWindowScroll } from '@mantine/hooks';
import { Affix, Button, Transition } from '@mantine/core';

export default function ScrollToTop() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Affix position={{ bottom: 70, right: 20 }}>
      <Transition transition="scale" mounted={scroll.y > 0}>
        {(transitionStyles) => (
          <Button compact color="brand" style={transitionStyles} onClick={() => scrollTo({ y: 0 })}>
            <IconArrowUp size={16} />
          </Button>
        )}
      </Transition>
    </Affix>
  );
}
