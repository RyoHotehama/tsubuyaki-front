import Head from 'next/head';
import { Box, Container, Typography } from '@mui/material';
import { LoginForm } from '@/components/LoginForm';

export default function Register() {
  return (
    <>
      <Head>
        <title>つぶやきくんログイン</title>
        <meta name="description" content="つぶやきくんログイン" />
      </Head>
      <Container maxWidth="xs">
        <Box marginTop={5}>
          <Typography variant="h5" textAlign={'center'} marginBottom={3}>
            つぶやきくんログイン
          </Typography>
          <LoginForm />
        </Box>
      </Container>
    </>
  );
}
