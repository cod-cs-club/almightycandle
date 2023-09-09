/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid, Box, Button } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Marketplace from 'assets/feature/marketplace.svg';
import Gift from 'assets/feature/gift.svg';
import Award from 'assets/feature/award.svg';

const data = [
  {
    id: 1,
    imgSrc: Award,
    altText: 'Marketplace',
    title: 'Starter Package',
    text:
      "Ideal for small businesses or startups that are new to AI. This package includes basic data analysis, simple machine learning models, and a limited set of features tailored to your business needs. Priced affordably, it's a perfect way to dip your toes into the world of AI without a hefty investment.",
  },
  {
    id: 2,
    imgSrc: Award,
    altText: 'Technology & Frameworks',
    title: 'Advanced Package',
    text:
      "Designed for medium-sized enterprises with more complex needs. This package offers advanced machine learning models, data engineering, and the integration of AI functionalities into your existing systems. The Advanced Package also includes quarterly model updates and performance tracking to ensure ongoing optimization.",
  },
  {
    id: 3,
    imgSrc: Award,
    altText: 'Awards',
    title: 'Enterprise Package',
    text:
      "Customized end-to-end solutions for large corporations with intricate, high-demand AI requirements. This premium package includes high-level data analysis, the development of complex machine learning models like neural networks or NLP-based algorithms, and full-scale system integration. Additional perks include priority customer support, monthly performance reviews, and continuous model refinements based on real-time data.",
  },
];


export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }} id="feature">
      <Container>
        <SectionHeader
          title="Custom AI Development Pricing"
          description="Unlock the potential of custom-built AI for your business with AlCa. Our team of machine learning experts, financial analysts, and web developers can develop tailored AI solutions to meet your specific needs. With our proven expertise in LSTM neural networks, TensorFlow, and AWS hosting, we offer a range of pricing plans designed to provide cost-effective, high-impact solutions."
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
        <Box sx={{ textAlign: 'center', pt: 8  }}>
          <Button
            variant="primary"
            sx={{ mx: 'auto' }} // center the button horizontally
            onClick={() => window.open('https://discord.gg/uzBEgApK9K', '_blank')} // open link in a new tab
            // padding

          >
            Contact Us
          </Button>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, null, 4],
    pb: [0, null, null, null, null, null, null, null, 6],
    gridGap: [
      '40px',
      '45px',
      '45px 30px',
      null,
      '60px 30px',
      '50px 40px',
      null,
      '75px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
