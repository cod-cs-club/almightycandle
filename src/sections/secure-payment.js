/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box } from 'theme-ui';
import TextFeature from 'components/text-feature';
import Image from 'components/image';

import PaymentThumb from 'assets/paymentThumb.png';

const data = {
  subTitle: 'PAYMENT SECURITY',
  title: '6 Secure Payment Transaction System with #1 Ranking',
  description:
    'Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever. Get your tests delivered at let home collect sample.',
  btnName: 'Learn More',
  btnURL: '#',
};

export default function SecurePayment() {
  return (
    <section sx={{ variant: 'section.securePayment' }}>
      <Box sx={styles.bgOverlay} />
      <Container sx={styles.containerBox}>
        <Box sx={styles.thumbnail}>
          <Image src={PaymentThumb} alt={data.title} />
        </Box>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={data.subTitle}
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
          />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  bgOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
    zIndex: -1,
    bg: '#F4F6F9',
    width: ['100%', null, null, null, 'calc(100% - 30px)'],
    borderTopLeftRadius: ['120px', '150px', '200px'],
    '@media screen and (min-width: 1300px)': {
      width: 'calc(50% + 625px)',
    },
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      right: 0,
      background:
        'linear-gradient(-45deg, #F4F9FD 25%, transparent 25%, transparent 50%, #F4F9FD 50%, #F4F9FD 75%, transparent 75%, transparent)',
      backgroundSize: '350px 350px',
      height: '100%',
      width: '100%',
      zIndex: 0,
    },
  },
  containerBox: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
  },
  thumbnail: {
    mb: -2,
    ml: [-4, '-40px', null, null, 0],
    order: [2, null, null, 0],
    pr: [6, null, 7, 0],
  },
  contentBox: {
    width: ['100%', null, null, 400, 500, 570],
    flexShrink: 0,
    textAlign: ['center', null, null, 'left'],
    pt: [0, null, null, '50px', '80px'],
    pl: [0, null, null, 40, 55],
    pb: [7, null, null, 9],
    pr: [0, null, null, null, null, 6],
  },
};
