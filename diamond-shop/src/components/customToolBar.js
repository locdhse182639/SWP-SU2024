import * as React from 'react';
import { Box, Typography, IconButton, Checkbox, Stack } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import SortIcon from '@mui/icons-material/Sort';
import AppsIcon from '@mui/icons-material/Apps';
// import './ComponentStyles.css'; 

export default function CustomToolbar() {
    return (
        <Box display="flex" justifyContent="space-between" alignItems="center" p={1} bgcolor="#eeeeee">
            <Stack direction="row" spacing={1} alignItems="center">
                <IconButton>
                    <FilterListIcon />
                </IconButton>
                <Typography>Bộ lọc</Typography>
                <IconButton>
                    <SortIcon />
                </IconButton>
                <Typography>Sắp xếp</Typography>
            </Stack>
        </Box>
    );
}
