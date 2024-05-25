"use client"; // Add this directive at the top

import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Avatar,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  AppBar,
  CssBaseline,
  Divider,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  IconButton,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Chat as ChatIcon,
  IntegrationInstructions as IntegrationsIcon,
  Assessment as ForecastsIcon,
  ShoppingCart as PurchaseOrderIcon,
  Description as LogsIcon,
  Settings as ConfigureWorkflowsIcon,
  Store as VendorsIcon,
  HourglassEmpty as PendingApprovalIcon,
  School as TrainAgentsIcon,
  AccountBox as MyAccountIcon,
  Delete as ClearConversationsIcon,
  WbSunny as LightModeIcon,
  Help as UpdatesFAQIcon,
  ExitToApp as LogoutIcon,
  Menu as MenuIcon,
  Search as SearchIcon
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

// Choose your shade of purple here
const primaryColor = '#9A57D3'; // Lavender
// const primaryColor = '#6A1B9A'; // Purple Plum
// const primaryColor = '#4A148C'; // Deep Purple

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBarStyled = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Dashboard = () => {
  const [date, setDate] = useState('Today');
  const [open, setOpen] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBarStyled position="fixed" open={open} sx={{ bgcolor: 'background.paper', color: primaryColor }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            edge="start"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
          <Box
            component="form"
            sx={{ display: 'flex', alignItems: 'center', bgcolor: 'background.paper', borderRadius: 1, p: 1 }}
          >
            <SearchIcon />
            <input type="text" placeholder="Search" style={{ border: 'none', outline: 'none', marginLeft: 8 }} />
          </Box>
        </Toolbar>
      </AppBarStyled>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box'
          }
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant="h4" noWrap component="div" sx={{ color: primaryColor }}>
            interface
          </Typography>
        </Toolbar>
        <Divider />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {[
              'Dashboard',
              'Chat',
              'Integrations',
              'Forecasts',
              'Purchase Order',
              'Logs',
              'Configure Workflows',
              'Vendors',
              'Pending Approval',
              'Train Agents',
              'My account',
              'Clear conversations',
              'Light mode',
              'Updates & FAQ',
              'Log out'
            ].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index === 0 && <DashboardIcon sx={{ color: primaryColor }} />}
                  {index === 1 && <ChatIcon sx={{ color: primaryColor }} />}
                  {index === 2 && <IntegrationsIcon sx={{ color: primaryColor }} />}
                  {index === 3 && <ForecastsIcon sx={{ color: primaryColor }} />}
                  {index === 4 && <PurchaseOrderIcon sx={{ color: primaryColor }} />}
                  {index === 5 && <LogsIcon sx={{ color: primaryColor }} />}
                  {index === 6 && <ConfigureWorkflowsIcon sx={{ color: primaryColor }} />}
                  {index === 7 && <VendorsIcon sx={{ color: primaryColor }} />}
                  {index === 8 && <PendingApprovalIcon sx={{ color: primaryColor }} />}
                  {index === 9 && <TrainAgentsIcon sx={{ color: primaryColor }} />}
                  {index === 10 && <MyAccountIcon sx={{ color: primaryColor }} />}
                  {index === 11 && <ClearConversationsIcon sx={{ color: primaryColor }} />}
                  {index === 12 && <LightModeIcon sx={{ color: primaryColor }} />}
                  {index === 13 && <UpdatesFAQIcon sx={{ color: primaryColor }} />}
                  {index === 14 && <LogoutIcon sx={{ color: primaryColor }} />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ fontSize: '0.875rem' }} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Main open={open} sx={{ bgcolor: 'background.paper' }}>
        <Toolbar />
        <Container maxWidth="lg">
          <Grid container spacing={3} alignItems="center" justifyContent="space-between" sx={{ mb: 3 }}>
            <Grid item>
              <Typography variant="h6">Overview</Typography>
            </Grid>
            <Grid item>
              <FormControl variant="outlined" size="small" sx={{ minWidth: 240 }}>
                <InputLabel>Date</InputLabel>
                <Select
                  value={date}
                  onChange={handleDateChange}
                  label="Date"
                  MenuProps={{ PaperProps: { sx: { maxHeight: 300 } } }}
                >
                  <MenuItem value="Today">Today</MenuItem>
                  <MenuItem value="This Week">This Week</MenuItem>
                  <MenuItem value="This Month">This Month</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={5}>
              <Grid container spacing={3}>
                {/* Costs Optimized */}
                <Grid item xs={12}>
                  <Paper
                    sx={{
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      height: 120,
                      position: 'relative'
                    }}
                  >
                    <Typography variant="h6">Costs Optimized</Typography>
                    <Typography variant="h4">$7,265</Typography>
                    <Typography sx={{ position: 'absolute', right: 16, bottom: 16, color: 'success.main' }}>
                      +11.02%
                    </Typography>
                  </Paper>
                </Grid>
                {/* Workflows Automated */}
                <Grid item xs={12}>
                  <Paper
                    sx={{
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      height: 120,
                      position: 'relative'
                    }}
                  >
                    <Typography variant="h6">Workflows Automated</Typography>
                    <Typography variant="h4">1,321</Typography>
                    <Typography sx={{ position: 'absolute', right: 16, bottom: 16, color: 'success.main' }}>
                      +18.04%
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
            {/* Sales Forecast */}
            <Grid item xs={12} md={6} lg={7}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 260
                }}
              >
                <img src="/chart.png" alt="Chart Placeholder" style={{ width: '100%', height: '100%' }} />
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={3} mt={3}>
            {/* Agents */}
            <Grid item xs={12} md={6} lg={4}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  height: 240
                }}
              >
                <Avatar src="/olivia.png" sx={{ width: 56, height: 56, mb: 2 }} />
                <Typography variant="h6">Olivia</Typography>
                <Typography>The data entry agent</Typography>
                <Button variant="contained" sx={{ mt: 2, bgcolor: primaryColor, color: 'white', textTransform: 'none' }}>
                  Get Started
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  height: 240
                }}
              >
                <Avatar src="/astrid.png" sx={{ width: 56, height: 56, mb: 2 }} />
                <Typography variant="h6">Astrid</Typography>
                <Typography>The data scientist agent</Typography>
                <Button variant="contained" sx={{ mt: 2, bgcolor: primaryColor, color: 'white', textTransform: 'none' }}>
                  Get Started
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  height: 240
                }}
              >
                <Avatar src="/rio.png" sx={{ width: 56, height: 56, mb: 2 }} />
                <Typography variant="h6">Rio</Typography>
                <Typography>Procurement Analyst</Typography>
                <Button variant="contained" sx={{ mt: 2, bgcolor: primaryColor, color: 'white', textTransform: 'none' }}>
                  Get Started
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Main>
    </Box>
  );
};

export default Dashboard;
