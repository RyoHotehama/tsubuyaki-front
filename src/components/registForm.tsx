import { Box, Stack, TextField } from '@mui/material';

export const RegistForm = () => {
  return (
    <Box component={'form'} autoComplete="off">
      <Stack spacing={2}>
        <TextField required={true} label={'メールアドレス'} placeholder={'tsubuyaki@tsubuyaki.co.jp'} />
        <TextField required={true} label={'ユーザーネーム'} placeholder={'つぶやきくん'} />
        <TextField required={true} label={'パスワード'} />
        <TextField required={true} label={'パスワード確認用'} />
      </Stack>
    </Box>
  );
};
