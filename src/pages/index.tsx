import Layout from '@components/layout/Layout';

import type { NextPage } from 'next';
import { Box } from '@mui/material';

const Home: NextPage = () => {
  return (
    <Layout>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 2,
          px: 2
        }}
      >
        Seja bem vindo
      </Box>
    </Layout>
  );
};

export default Home;
