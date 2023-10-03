/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Button } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Image from 'components/image';

import Client from 'assets/images/client-thumb.png';

export default function ClientFeedback() {
  return (
    <section sx={{ variant: 'section.feedback' }} id="feedback">
      <Container>
        <SectionHeader
          title="Our AI"
          description="Engage with the vibrant community of AlCa users, investors, and enthusiasts. Our Discord channel offers a platform for lively discussions, knowledge sharing, and direct support from our team. Whether you're a seasoned trader or just starting out, find insights and connections to enhance your investment journey."
        />

        <Box sx={{ textAlign: 'center', pb: 6  }}>
          <Button
            variant="primary"
            sx={{ mx: 'auto' }} // center the button horizontally
            onClick={() => window.open('', '_blank')} // open link in a new tab
            // padding

          >
            Join Here
          </Button>
        </Box>

        <Box sx={styles.thumbWrapper}>
          <Image
            src={Client}
            alt="Clients Thumbnail"
            width="891"
            height="297"
          />
        </Box>
      </Container>
    </section>
  );
}


const styles = {
  thumbWrapper: {
    display: 'flex',
    justifyContent: 'center',
    px: 4,
    pb: [0, null, null, null, null, null, null, null, 6],
    img: {
      height: [100, 'auto'],
    },
  },
};
