import { Avatar, Box, Divider, IconButton, Stack, Switch } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Gear } from 'phosphor-react';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { faker } from '@faker-js/faker';

import Logo from '../../assets/Images/logo.ico';
import { Nav_Buttons } from '../../data/index.js';
import AntSwitch from '../../components/AntSwitch';

import useSettings from '../../hooks/useSettings';

const DashboardLayout = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState(0);
  const { onToggleMode } = useSettings();
  console.log(theme);

  return (
    <>
      <Box
        padding='1rem' // 16px
        sx={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)',
          height: '100vh',
          width: 100,
        }}
      >
        <Stack
          direction='column'
          alignItems='center'
          justifyContent='space-between'
          spacing='24px'
          sx={{ height: '100%' }}
        >
          <Stack alignItems='center' spacing='32px'>
            <Box
              sx={{
                backgroundColor: theme.palette.primary.main,
                height: '64px',
                width: '64px',
                borderRadius: '12px',
              }}
            >
              <img src={Logo} alt='Chat app logo' />
            </Box>
            <Stack
              direction='column'
              alignItems='center'
              spacing='24px'
              sx={{
                width: 'max-content',
              }}
            >
              {Nav_Buttons.map((element) =>
                element.index === selected ? (
                  <Box
                    padding='0.5rem' // 8px
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: '12px',
                    }}
                  >
                    <IconButton
                      sx={{ width: 'max-content', color: '#fff' }}
                      key={element.index}
                    >
                      {element.icon}
                    </IconButton>
                  </Box>
                ) : (
                  <IconButton
                    sx={{
                      width: 'max-content',
                      color:
                        theme.palette.mode === 'light'
                          ? '#000'
                          : theme.palette.text.primary,
                    }}
                    key={element.index}
                    onClick={() => setSelected(element.index)}
                  >
                    {element.icon}
                  </IconButton>
                ),
              )}
              <Divider sx={{ width: '48px' }} />
              {selected === 3 ? (
                <Box
                  padding='0.5rem' // 8px
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: '12px',
                  }}
                >
                  <IconButton sx={{ width: 'max-content', color: '#fff' }}>
                    <Gear />
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  sx={{
                    width: 'max-content',
                    color:
                      theme.palette.mode === 'light'
                        ? '#000'
                        : theme.palette.text.primary,
                  }}
                  onClick={() => setSelected(3)}
                >
                  <Gear />
                </IconButton>
              )}
            </Stack>
          </Stack>

          <Stack spacing='32px'>
            {/* Switch */}
            <AntSwitch
              onChange={() => {
                onToggleMode();
              }}
              defaultChecked
            />
            <Avatar src={faker.image.avatar()} />
          </Stack>
        </Stack>
      </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
