import NextLink from 'next/link';
import NavItem from './NavItem';

import { FC, useEffect } from "react";
import { NextRouter, useRouter } from 'next/router';
import { ChartBar as ChartBarIcon } from '@icons/chart-bar';
import { Cog as CogIcon } from '@icons/cog';
import { Lock as LockIcon } from '@icons/lock';
import { ShoppingBag as ShoppingBagIcon } from '@icons/shopping-bag';
import { User as UserIcon } from '@icons/user';
import { UserAdd as UserAddIcon } from '@icons/user-add';
import { Users as UsersIcon } from '@icons/users';
import { XCircle as XCircleIcon } from '@icons/x-circle';
import { Box, Divider, Drawer, Theme, Typography, useMediaQuery } from '@mui/material';

const items = [
  {
    href: '/',
    icon: (<ChartBarIcon fontSize="small" />),
    title: 'Dashboard'
  },
  {
    href: '/customers',
    icon: (<UsersIcon fontSize="small" />),
    title: 'Customers'
  },
  {
    href: '/products',
    icon: (<ShoppingBagIcon fontSize="small" />),
    title: 'Products'
  },
  {
    href: '/account',
    icon: (<UserIcon fontSize="small" />),
    title: 'Account'
  },
  {
    href: '/settings',
    icon: (<CogIcon fontSize="small" />),
    title: 'Settings'
  },
  {
    href: '/login',
    icon: (<LockIcon fontSize="small" />),
    title: 'Login'
  },
  {
    href: '/register',
    icon: (<UserAddIcon fontSize="small" />),
    title: 'Register'
  },
  {
    href: '/404',
    icon: (<XCircleIcon fontSize="small" />),
    title: 'Error'
  }
]

const Sidebar: FC<SidebarProps> = ({ open, onClose }) => {
  const router: NextRouter = useRouter();
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false
  });

  useEffect(
    () => {
      if (!router.isReady) {
        return;
      } 

      if (open) {
        onClose?.();
      }
    },
    [router.asPath]
  )

  const content = (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        <div>
          <Box sx={{ p: 3, textAlign: 'center' }}>
            <NextLink
              href="/"
              passHref
            >
              <a>
                <img height={42} src="/static/logo.png" />
              </a>
            </NextLink>
          </Box>
          <Box sx={{ px: 2 }}>
            <Box
              sx={{
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                display: 'flex',
                justifyContent: 'space-between',
                px: 3,
                py: '11px',
                borderRadius: 1
              }}
            >
              <div>
                <Typography
                  color="inherit"
                  variant="subtitle1"
                >
                  Vision Trac
                </Typography>
                <Typography
                  color="#9CA3AF"
                  variant="body2"
                >
                  Usuário: Rayanne S.
                </Typography>
              </div>
            </Box>
          </Box>
        </div>
        <Divider
          sx={{
            borderColor: '#2D3748',
            my: 3
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          ))}
        </Box>
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: '#111827',
            color: '#FFFFFF',
            width: 280
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: '#111827',
          color: '#FFFFFF',
          width: 280
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
}

type SidebarProps = {
  open: boolean;
  onClose: any;
}

export default Sidebar;
