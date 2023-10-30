import { Box, Button, Stack, TextField } from '@mui/material';

export const LoginForm = () => {
  return (
    <Box component={'form'} autoComplete="off">
      <Stack spacing={2}>
        <TextField required={true} label={'ユーザーネーム'} placeholder={'つぶやきくん'} />
        <TextField required={true} label={'パスワード'} />
      </Stack>
      <Box marginTop={3}>
        <Button variant="contained" size="large" sx={{ width: '100%' }}>
          ログイン
        </Button>
      </Box>
    </Box>
  );
};
