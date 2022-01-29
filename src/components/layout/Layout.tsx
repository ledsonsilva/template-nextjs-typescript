import Navbar from "@components/layout/Navbar";
import Sidebar from "@components/layout/Sidebar";

import { FC, useState } from "react";
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const LayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 64,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 280
  }
}));

const Layout: FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <>
      <LayoutRoot>
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            width: '100%'
          }}
        >
          {children}
        </Box>
      </LayoutRoot>
      <Navbar onSidebarOpen={() => setSidebarOpen(true)}/>
      <Sidebar open={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}

type LayoutProps = {
  children: any;
}

export default Layout;
