import Head from 'next/head';
import { Box, Container, Typography } from '@mui/material';

export default function MailSend() {
  return (
    <>
      <Head>
        <title>つぶやきくん仮登録</title>
        <meta name="description" content="つぶやきくん仮登録" />
      </Head>
      <Container maxWidth="md">
        <Typography variant="h4" textAlign={'center'}>
          仮登録完了
        </Typography>
        <Box marginTop={5} textAlign={'center'}>
          <Typography variant="h6">つぶやきくんの仮登録が完了しました。</Typography>
          <Typography variant="h6">メールを確認して本登録を完了してください。</Typography>
        </Box>
      </Container>
    </>
  );
}
