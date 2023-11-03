import Head from 'next/head';
import { Box, Container, Typography } from '@mui/material';
import { RegistForm } from '@/components/RegistForm';

export default function Register() {
  return (
    <>
      <Head>
        <title>つぶやきくん会員登録</title>
        <meta name="description" content="つぶやきくん会員登録" />
      </Head>
      <Container maxWidth="xs">
        <Box marginTop={5}>
          <Typography variant="h5" textAlign={'center'} marginBottom={3}>
            つぶやきくん会員登録
          </Typography>
          <RegistForm />
        </Box>
      </Container>
    </>
  );
}
