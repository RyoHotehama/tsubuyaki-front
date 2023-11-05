import { OmikujiObj } from '@/consts/OmikujiConst';
import { calculatePtEarned } from '@/hooks/OmikujiHook';
import { OmikujiResultType } from '@/types/OmikujiType';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

export const OmikujiResult = ({ result }: { result: OmikujiResultType }) => {
  if (result.image && result.name) {
    return (
      <>
        <Box display={'flex'} justifyContent={'center'}>
          <Image src={result.image} width={200} height={200} style={{ objectFit: 'contain' }} alt={result.name} />
        </Box>
        <Typography variant="h5" fontWeight={'bold'}>
          {result.name}　{calculatePtEarned(result.name, OmikujiObj)}Pt獲得
        </Typography>
        <Typography variant="h5">また明日チャレンジしてね！</Typography>
      </>
    );
  }
};
