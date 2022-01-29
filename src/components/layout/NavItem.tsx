import NextLink from 'next/link';

import { FC } from 'react';
import { useRouter } from 'next/router';
import { Box, Button, ListItem } from '@mui/material';

const NavItem: FC<NavItemProps> = ({ title, href, icon, ...others }) => {
  const router = useRouter();
  const active = href ? (router.pathname === href) : false;

  return (
    <ListItem
      disableGutters
      sx={{
        display: 'flex',
        mb: 0.5,
        py: 0,
        px: 2
      }}
      {...others}
    >
      <NextLink
        href={href}
        passHref
      >
        <Button
          disableRipple
          component="a"
          startIcon={icon}
          sx={{
            px: 3,
            borderRadius: 1,
            width: '100%',
            justifyContent: 'flex-start',
            textAlign: 'left',
            textTransform: 'none',
            bgcolor: active ? 'rgba(255,255,255, 0.08)' : 'false',
            color: active ? 'secondary.main' : '#D1D5DB',
            fontWeight: active ? '700': '600',
            '& .MuiButton-startIcon': {
              color: active ? 'secondary.main' : '#9CA3AF'
            },
            '&:hover': {
              bgcolor: 'rgba(255,255,255, 0.08)'
            }
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            {title}
          </Box>
        </Button>
      </NextLink>
    </ListItem>
  );
};

type NavItemProps = {
  title: string;
  href: string;
  icon: any;
}

export default NavItem;
