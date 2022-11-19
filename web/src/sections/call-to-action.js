/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Button } from 'theme-ui';

import BgShape from 'assets/shape-1.svg';
import btnShapeTop from 'assets/btn-shape-top.svg';
import btnShapeBottom from 'assets/btn-shape-bottom.svg';

export default function CallToAction() {
  return (
    <div sx={styles.wrapper}>
      <Container sx={styles.container}>
        <Box sx={styles.contentBox}>
          <Heading sx={styles.heading}>
            Do you have any question? Feel free to contact us
          </Heading>
          <Box sx={styles.btnWrapper}>
            <Button variant="whiteButton" aria-label="Contact Us">
              CONTACT US NOW
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

const styles = {
  wrapper: {
    position: 'relative',
    zIndex: '10',
    top: -9,
    mb: -9,
  },
  container: {
    px: [0, '0 !important', '30px !important'],
  },
  contentBox: {
    padding: ['55px 30px 60px', null, null, '55px 30px 60px', '55px 50px 60px'],
    backgroundColor: '#183656',
    backgroundImage: ['none', null, null, `url(${BgShape})`],
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '60% center',
    backgroundSize: ['120px', null, null, null, 'auto'],
    borderRadius: '7px',
    display: 'flex',
    alignItems: 'center',
    textAlign: ['center', null, null, 'left'],
    flexDirection: ['column', null, null, 'row'],
    justifyContent: ['center', null, null, 'space-between'],
  },
  heading: {
    fontSize: [6, 7, 8, null, 9],
    fontFamily: 'heading',
    color: 'white',
    letterSpacing: 'heading',
    fontWeight: 'body',
    lineHeight: [1.4, 1.45],
    width: ['100%', '80%', null, 400, '50%', '45%'],
    mb: [5, null, null, 0],
    mt: -1,
  },
  btnWrapper: {
    display: 'flex',
    position: 'relative',
    ':before, :after': {
      content: '""',
      position: 'absolute',
      width: '73px',
      height: '26px',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      left: '50%',
      transform: 'translateX(-50%)',
      display: ['none', null, null, 'block'],
    },
    ':before': {
      backgroundImage: `url(${btnShapeTop})`,
      top: '-38px',
    },
    ':after': {
      backgroundImage: `url(${btnShapeBottom})`,
      bottom: '-38px',
    },
  },
};
