import { Box } from '@mui/material';
import Image from 'next/image';

export const Header = () => {
  return (
    <Box
      height={80}
      width={'100%'}
      position={'fixed'}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottom: 0.5,
        borderColor: '#b3b3b3',
      }}>
      <Image src={'/logo.png'} width={70} height={70} alt="logo" />
    </Box>
  );
};
