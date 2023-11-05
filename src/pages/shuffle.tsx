import { OmikujiList } from '@/components/OmikujiList';
import { OmikujiResult } from '@/components/OmikujiResult';
import { drawOmikuji } from '@/hooks/OmikujiHook';
import { OmikujiResultType } from '@/types/OmikujiType';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

export default function Shuffle() {
  const [omikujiResult, setOmikujiResult] = useState<OmikujiResultType>({ image: '', name: '' });

  // おみくじを引くを押下した際の処理
  const handleClick = () => {
    const result = drawOmikuji();

    setOmikujiResult(result);
  };
  return (
    <>
      <Head>
        <title>つぶやきくん 占い</title>
        <meta name="description" content="つぶやきくん 占い" />
      </Head>
      <Container maxWidth="md" style={{ textAlign: 'center' }}>
        <Stack spacing={3}>
          <Box display={'flex'} justifyContent={'center'}>
            <Image src={'/jinja_miko.png'} width={250} height={250} style={{ objectFit: 'contain' }} alt="miko" loading="lazy" />
          </Box>
          {!omikujiResult.image && !omikujiResult.name && (
            <Box marginTop={5}>
              <Typography variant="h4">本日の占い</Typography>
            </Box>
          )}
          <OmikujiResult result={omikujiResult} />
          {!omikujiResult.image && !omikujiResult.name && (
            <>
              <Box>
                <Box width={'40%'} marginLeft={'auto'} marginRight={'auto'}>
                  <OmikujiList />
                </Box>
              </Box>
              <Box>
                <Button variant="contained" size="large" onClick={handleClick}>
                  おみくじを引く
                </Button>
              </Box>
            </>
          )}
          <Typography variant="h5">あなたのPt 100</Typography>
        </Stack>
      </Container>
    </>
  );
}
