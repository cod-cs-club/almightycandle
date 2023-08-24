/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
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
    title: 'Predictive LSTM Model',
    text:
      'Utilizing a Long Short-Term Memory (LSTM) neural network, AlCa predicts stock prices for a future window of three days, leveraging historical data from various industry stocks.',
  },
  {
    id: 2,
    imgSrc: Award,
    altText: 'Technology & Frameworks',
    title: 'Cutting-Edge Technology',
    text:
      'Built on Next.js and Flask for a smooth user experience, and powered by TensorFlow for intelligent machine learning computations. Hosted on AWS for high availability and performance.',
  },
  {
    id: 3,
    imgSrc: Award,
    altText: 'Awards',
    title: 'Security and Continual Improvement',
    text:
      'AlCa prioritizes security and privacy, adhering to industry regulations. The team continually updates the model with new data and refinements, making it a valuable resource for stock market investing.',
  },
];


export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }} id="feature">
      <Container>
        <SectionHeader
          title="Our AI"
          description="Focus only on the stock, we take care of what's most likely next. As soon as you enter the Stock, our AI has already ran it's neural network optimazied for prediction."
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
