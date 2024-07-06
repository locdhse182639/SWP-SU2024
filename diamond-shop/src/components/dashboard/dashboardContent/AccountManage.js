import React, { useState, useEffect } from 'react';
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TablePagination,
  MenuItem,
  Select,
  InputLabel,
  FormControl
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import DashboardNav from './DashboardNav';

const AccountManage = () => {
  const [accounts, setAccounts] = useState([]);
  const [roles, setRoles] = useState([]);
  const [open, setOpen] = useState(false);
  const [editingAccount, setEditingAccount] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    fetchAccounts();
    fetchRoles();
  }, []);

  const fetchAccounts = async () => {
    try {
      const response = await fetch('https://localhost:7251/api/Users');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      // Fetch points for each account
      const accountsWithPoints = await Promise.all(data.map(async (account) => {
        try {
          const customerResponse = await fetch(`https://localhost:7251/api/Customers/User/${account.userId}`);
          if (!customerResponse.ok) {
            throw new Error(`HTTP error! status: ${customerResponse.status}`);
          }
          const customerData = await customerResponse.json();
          const pointsResponse = await fetch(`https://localhost:7251/api/CustomerPoints/${customerData.customerId}`);
          if (!pointsResponse.ok) {
            throw new Error(`HTTP error! status: ${pointsResponse.status}`);
          }
          const pointsData = await pointsResponse.json();
          return { ...account, points: pointsData.points, customerId: customerData.customerId };
        } catch (error) {
          console.error(`Error fetching customer points for user ${account.userId}:`, error);
          return { ...account, points: 0 }; // Return account with default points if error occurs
        }
      }));

      setAccounts(accountsWithPoints);
    } catch (error) {
      console.log('Error fetching accounts', error);
    }
  };

  const fetchRoles = async () => {
    try {
      const response = await fetch('https://localhost:7251/api/Users/roles');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setRoles(data);
    } catch (error) {
      console.log('Error fetching roles', error);
    }
  };

  const handleOpen = (account) => {
    setEditingAccount(account || { username: '', password: '', email: '', roleId: '', points: 0 });
    setOpen(true);
  };

  const handleClose = () => {
    setEditingAccount(null);
    setOpen(false);
  };

  const handleSave = async () => {
    try {
      if (editingAccount.userId) {
        await fetch(`https://localhost:7251/api/Users/${editingAccount.userId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(editingAccount)
        });
        await fetch(`https://localhost:7251/api/CustomerPoints/${editingAccount.customerId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ points: editingAccount.points })
        });
      } else {
        const userResponse = await fetch('https://localhost:7251/api/Users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(editingAccount)
        });
        const userData = await userResponse.json();

        const customerResponse = await fetch('https://localhost:7251/api/Customers', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ userId: userData.userId })
        });
        const customerData = await customerResponse.json();

        await fetch(`https://localhost:7251/api/CustomerPoints`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ customerId: customerData.customerId, points: editingAccount.points })
        });
      }
      fetchAccounts();
      handleClose();
    } catch (error) {
      console.log('Error saving account', error);
    }
  };

  const handleDelete = async (userId, customerId) => {
    try {
      await fetch(`https://localhost:7251/api/Users/${userId}`, {
        method: 'DELETE'
      });
      await fetch(`https://localhost:7251/api/CustomerPoints/${customerId}`, {
        method: 'DELETE'
      });
      fetchAccounts();
    } catch (error) {
      console.log('Error deleting account', error);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      <DashboardNav />
      <Container className='container'>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">UserID</TableCell>
                <TableCell align="center">Username</TableCell>
                <TableCell align="center">Password</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">RoleID</TableCell>
                <TableCell align="center">Points</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {accounts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((account) => (
                <TableRow key={account.userId}>
                  <TableCell align="center">{account.userId}</TableCell>
                  <TableCell align="center">{account.username}</TableCell>
                  <TableCell align="center">{'*'.repeat(account.password.length)}</TableCell>
                  <TableCell align="center">{account.email}</TableCell>
                  <TableCell align="center">{account.roleId}</TableCell>
                  <TableCell align="center">{account.points}</TableCell>
                  <TableCell align="center">
                    <IconButton onClick={() => handleOpen(account)}>
                      <Edit />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(account.userId, account.customerId)}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={accounts.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
        <Button variant="contained" color="primary" onClick={() => handleOpen(null)}>
          Add Account
        </Button>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>{editingAccount?.userId ? 'Edit Account' : 'Add Account'}</DialogTitle>
          <DialogContent>
            {editingAccount?.userId && (
              <TextField
                margin="dense"
                label="UserID"
                type="text"
                fullWidth
                value={editingAccount.userId}
                disabled
              />
            )}
            <TextField
              margin="dense"
              label="Username"
              type="text"
              fullWidth
              value={editingAccount?.username || ''}
              onChange={(e) => setEditingAccount({ ...editingAccount, username: e.target.value })}
            />
            <TextField
              margin="dense"
              label="Password"
              type="password"
              fullWidth
              value={editingAccount?.password || ''}
              onChange={(e) => setEditingAccount({ ...editingAccount, password: e.target.value })}
            />
            <TextField
              margin="dense"
              label="Email"
              type="email"
              fullWidth
              value={editingAccount?.email || ''}
              onChange={(e) => setEditingAccount({ ...editingAccount, email: e.target.value })}
            />
            <FormControl fullWidth margin="dense">
              <InputLabel id="role-label">RoleID</InputLabel>
              <Select
                labelId="role-label"
                value={editingAccount?.roleId || ''}
                onChange={(e) => setEditingAccount({ ...editingAccount, roleId: e.target.value })}
                label="RoleID"
              >
                {roles.map((role) => (
                  <MenuItem key={role.roleId} value={role.roleId}>
                    {role.roleId} - {role.roleName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              margin="dense"
              label="Points"
              type="number"
              fullWidth
              value={editingAccount?.points || 0}
              onChange={(e) => setEditingAccount({ ...editingAccount, points: parseInt(e.target.value, 10) })}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleSave} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </div>
  );
};

export default AccountManage;
