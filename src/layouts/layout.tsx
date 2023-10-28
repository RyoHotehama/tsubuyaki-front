import { Box } from '@mui/material';
import { Header } from './header';
import { ReactNode } from 'react';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <Box paddingTop={12}>{children}</Box>
    </>
  );
};
