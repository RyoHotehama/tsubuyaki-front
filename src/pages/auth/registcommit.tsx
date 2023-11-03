import Head from 'next/head';
import { Box, Container, Typography } from '@mui/material';
import Link from 'next/link';

export default function RegistCommit() {
  return (
    <>
      <Head>
        <title>つぶやきくん登録完了</title>
        <meta name="description" content="つぶやきくん登録完了" />
      </Head>
      <Container maxWidth="md">
        <Typography variant="h4" textAlign={'center'}>
          本登録完了
        </Typography>
        <Box marginTop={5} textAlign={'center'}>
          <Typography variant="h6">つぶやきくんの登録が完了しました。</Typography>
          <Typography variant="h6">つぶやきくんをお楽しみください。</Typography>
        </Box>
        <Box marginTop={5} textAlign={'center'} color={'#1a0dab'}>
          <Link href={'/'}>トップへ</Link>
        </Box>
      </Container>
    </>
  );
}
