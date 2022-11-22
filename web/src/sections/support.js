/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Image from 'components/image';
import {Card, Grid, Text, Link} from "@nextui-org/react";

import SupportTeam from 'assets/images/support-thumb.png';

export default function Support() {
  return (
    <section sx={{ variant: 'section.support' }} id="support">
      <Container>
        <>
          return (
          <Card css={{ p: "$6", mw: "400px" }}>
            <Card.Header>
              <img
                alt="nextui logo"
                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                width="34px"
                height="34px"
              />
              <Grid.Container css={{ pl: "$6" }}>
                <Grid xs={12}>
                  <Text h4 css={{ lineHeight: "$xs" }}>
                    Next UI
                  </Text>
                </Grid>
                <Grid xs={12}>
                  <Text css={{ color: "$accents8" }}>nextui.org</Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: "$2" }}>
              <Text>
                Make beautiful websites regardless of your design experience.
              </Text>
            </Card.Body>
            <Card.Footer>
              <Link
                icon
                color="primary"
                target="_blank"
                href="https://github.com/nextui-org/nextui"
              >
                Visit source code on GitHub.
              </Link>
            </Card.Footer>
          </Card>
          );

        </>
        <SectionHeader
          title="Meet The Team"
          description="Bla Bla Bla, and another bla with some extra bla for taste."
        />

        <Box sx={styles.thumbWrapper}>
          <Image
            src={SupportTeam}
            alt="Support Team"
            width="992"
            height="531"
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
    img: {
      height: [180, 'auto'],
    },
  },
};
