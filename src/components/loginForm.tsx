import { loginApi } from '@/api/login';
import { authentication } from '@/api/sanctum';
import { Box, Button, FormHelperText, Stack, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import { Controller, useForm } from 'react-hook-form';

export const LoginForm = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({});

  const submit = async (data: any) => {
    try {
      await authentication();

      // ログイン処理
      await loginApi(data);

      router.push('/');
    } catch (e: any) {
      const code = e.code;
      if (code === 400) {
        setError('error', {
          type: 'manual',
          message: e.data.errors.message,
        });
      }
    }
  };
  return (
    <Box component={'form'} autoComplete="off" onSubmit={handleSubmit(submit)}>
      <Stack spacing={2}>
        <FormHelperText error={errors.error ? true : false}>{errors.error?.message as string}</FormHelperText>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          rules={{
            required: { value: true, message: 'ユーザーネームを入力してください。' },
          }}
          render={({ field, formState: { errors } }) => (
            <TextField
              {...field}
              required={true}
              label={'ユーザーネーム'}
              placeholder={'つぶやきくん'}
              error={errors.name || errors.error ? true : false}
              helperText={errors.name?.message as string}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={{
            required: { value: true, message: 'パスワードを入力してください。' },
          }}
          render={({ field, formState: { errors } }) => (
            <TextField
              {...field}
              required={true}
              label={'パスワード'}
              error={errors.password || errors.error ? true : false}
              helperText={errors.password?.message as string}
              type="password"
            />
          )}
        />
      </Stack>
      <Box marginTop={3}>
        <Button variant="contained" size="large" sx={{ width: '100%' }} onClick={handleSubmit(submit)}>
          ログイン
        </Button>
      </Box>
    </Box>
  );
};
