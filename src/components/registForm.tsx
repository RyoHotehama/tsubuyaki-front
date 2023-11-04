import { registerApi } from '@/api/register';
import { authentication } from '@/api/sanctum';
import { Box, Button, Stack, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import { Controller, useForm } from 'react-hook-form';

export const RegistForm = () => {
  const router = useRouter();
  const { control, handleSubmit, getValues, setError } = useForm({});
  const submit = async (data: any) => {
    try {
      await authentication();
      // 会員登録処理
      await registerApi(data);

      router.push('/auth/registcommit');
    } catch (e: any) {
      const code = e.code;
      if (code === 400) {
        if (e.data.errors.email) {
          setError('email', {
            type: 'manual',
            message: e.data.errors.email,
          });
        }
        if (e.data.errors.name) {
          setError('name', {
            type: 'manual',
            message: e.data.errors.name,
          });
        }
        if (e.data.errors.password) {
          setError('password', {
            type: 'manual',
            message: e.data.errors.password,
          });
        }
        if (e.data.errors.password_conf) {
          setError('password_conf', {
            type: 'manual',
            message: e.data.errors.password_conf,
          });
        }
      }
    }
  };

  return (
    <Box component={'form'} autoComplete="off" onSubmit={handleSubmit(submit)}>
      <Stack spacing={2}>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{
            required: { value: true, message: 'メールアドレスを入力してください。' },
            pattern: { value: /^[\w\-._]+@[\w\-._]+\.[A-Za-z]+/, message: 'メールアドレスの形式が正しくありません。' },
          }}
          render={({ field, formState: { errors } }) => (
            <TextField
              {...field}
              required={true}
              label={'メールアドレス'}
              placeholder={'tsubuyaki@tsubuyaki.co.jp'}
              error={errors.email ? true : false}
              helperText={errors.email?.message as string}
            />
          )}
        />
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
              error={errors.name ? true : false}
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
            minLength: { value: 8, message: 'パスワードは8文字以上16文字以内で入力してください。' },
            maxLength: { value: 16, message: 'パスワードは8文字以上16文字以内で入力してください。' },
          }}
          render={({ field, formState: { errors } }) => (
            <TextField
              {...field}
              required={true}
              label={'パスワード'}
              error={errors.password ? true : false}
              helperText={errors.password?.message as string}
              type="password"
            />
          )}
        />
        <Controller
          name="password_conf"
          control={control}
          defaultValue=""
          rules={{
            required: { value: true, message: 'パスワード(確認用)を入力してください。' },
            validate: { message: (value: string) => (value !== getValues('password') ? 'パスワードが一致しません。' : undefined) },
          }}
          render={({ field, formState: { errors } }) => (
            <TextField
              {...field}
              required={true}
              label={'パスワード確認用'}
              error={errors.password_conf ? true : false}
              helperText={errors.password_conf?.message as string}
              type="password"
            />
          )}
        />
      </Stack>
      <Box marginTop={3}>
        <Button variant="contained" size="large" sx={{ width: '100%' }} onClick={handleSubmit(submit)}>
          会員登録する
        </Button>
      </Box>
    </Box>
  );
};
