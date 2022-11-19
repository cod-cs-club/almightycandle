/** @jsx jsx */
import { jsx, Image, Box, Heading, Text } from 'theme-ui';

export default function FeatureCard({
  src,
  altText = 'default alt text',
  title,
  text,
}) {
  return (
    <Box sx={styles.card}>
      <Image src={src} alt={altText} sx={styles.img} />

      <Box sx={styles.wrapper}>
        <Heading sx={{ variant: 'text.heading' }}>{title}</Heading>
        <Text as="p" sx={styles.wrapper.description}>
          {text}
        </Text>
      </Box>
    </Box>
  );
}

const styles = {
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: ['column', null, 'row'],
    px: [0, 5, 0],
  },

  img: {
    width: ['45px', null, '40px', '42px', null, null, null, '50px'],
    height: 'auto',
    flexShrink: 0,
    mr: ['auto', null, 4, 5, null, null, null, 6],
    mb: ['22px', 5],
    ml: 'auto',
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: ['center', null, 'left'],
    mt: ['-4px', '-7px'],
    mb: -1,
    description: {
      fontSize: [1, 2],
      fontWeight: 'body',
      lineHeight: 1.9,
      pt: 2,
    },
  },
};
