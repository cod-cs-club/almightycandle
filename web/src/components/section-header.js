import React from 'react';
import { Box, Text, Heading } from 'theme-ui';

export default function SectionHeader({ title, description }) {
  return (
    <Box sx={{ variant: 'sectionHeader' }}>
      <Heading
        as="h2"
        sx={{
          variant: 'sectionHeader.title',
        }}
      >
        {title}
      </Heading>
      <Text
        as="p"
        sx={{
          variant: 'sectionHeader.description',
        }}
      >
        {description}
      </Text>
    </Box>
  );
}
