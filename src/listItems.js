import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import MergeTypeIcon from '@material-ui/icons/MergeType';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import SettingsIcon from '@material-ui/icons/Settings';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

import Calendar from 'react-calendar';
import 'react-daypicker/lib/DayPicker.css';
import DayPicker from 'react-daypicker';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
      </ListItemIcon>
      <ListItemText primary="Help" />
    </ListItem>
    <ListItem button style={{ backgroundColor: 'red', borderRadius: 20, boxShadow: "1px 5px 5px #00000050" }}>
      <ListItemIcon>
        <PeopleIcon style={{ color: 'white',  }} />
      </ListItemIcon>
      <ListItemText primary="Self Service" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <MergeTypeIcon style={{ color: 'white',  }} />
      </ListItemIcon>
      <ListItemText primary="Loan Approval" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AccountCircleIcon style={{ color: 'white',  }} />
      </ListItemIcon>
      <ListItemText primary="HR" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShowChartIcon style={{ color: 'white',  }} />
      </ListItemIcon>
      <ListItemText primary="Finance" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SettingsIcon style={{ color: 'white',  }} />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ErrorOutlineIcon style={{ color: 'white',  }} />
      </ListItemIcon>
      <ListItemText primary="Report" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
   <DayPicker  />
  </div>
);