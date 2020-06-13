import React from 'react';
import ThemeContextWrapper from './src/utils/ThemeContext';
import FilterContextWrapper from './src/utils/FiltersContext';
import { MDXProvider } from '@mdx-js/react';

// provide contexts to entire app
export const wrapRootElement = ({ element }) => (
  <ThemeContextWrapper>
    <FilterContextWrapper>
      <MDXProvider>{element}</MDXProvider>
    </FilterContextWrapper>
  </ThemeContextWrapper>
);