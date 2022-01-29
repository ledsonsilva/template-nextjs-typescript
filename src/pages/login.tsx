import * as Yup from 'yup';

import type { NextPage } from 'next';
import { Container, CssBaseline, Box, Avatar, Typography, TextField, Button } from '@mui/material';
import { FormikValues, useFormik } from 'formik';
import { Messages } from '@utils/Messages';

const Login: NextPage = () => {
  const form: FormikValues = useFormik({
    initialValues: {
      username: 'admin@email.com.br',
      password: '123456789'
    },
    validationSchema: Yup.object({
      username: Yup
        .string()
        .email(Messages.INVALID_EMAIL)
        .required(Messages.REQUIRED_FIELD),
      password: Yup
        .string()
        .required(Messages.REQUIRED_FIELD)
    }),
    onSubmit: (value) => {
      console.log(value);
    }
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ p: 0.5, m: 1, width: 60, height: 60, bgcolor: 'primary.main' }} src="/static/logo.png" />
        
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>

        <form onSubmit={form.handleSubmit} noValidate>
          <Box sx={{ mt: 1 }}>
            <TextField
              autoFocus
              required
              fullWidth
              id="username"
              name="username"
              label="Email"
              margin="normal"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.username}
              error={Boolean(form.touched.username && form.errors.username)}
              helperText={form.touched.username && form.errors.username}
              inputProps={{ maxLength: 150 }}
            />
            <TextField
              required
              fullWidth
              id="password"
              name="password"
              label="Senha"
              type="password"
              margin="normal"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.password}
              error={Boolean(form.touched.password && form.errors.password)}
              helperText={form.touched.password && form.errors.password}
              inputProps={{ maxLength: 20 }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </form>

      </Box>
    </Container>
  );
};

export default Login;
