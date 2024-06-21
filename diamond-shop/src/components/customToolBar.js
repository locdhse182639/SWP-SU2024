import React, { useState } from 'react';
import { Box, Typography, IconButton, Select, MenuItem, FormControl, InputLabel, Slider, Stack } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import SortIcon from '@mui/icons-material/Sort';

const CustomToolbar = ({ onFilterChange, onSortChange }) => {
  const [filter, setFilter] = useState({
    shape: '',
    color: '',
    clarity: '',
    cut: '',
    priceRange: [0, 5000000],
    caratRange: [0, 8],
  });
  const [sort, setSort] = useState('');

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilter({
      ...filter,
      [name]: value,
    });
    onFilterChange({ ...filter, [name]: value });
  };

  const handlePriceChange = (event, newValue) => {
    setFilter({
      ...filter,
      priceRange: newValue,
    });
    onFilterChange({ ...filter, priceRange: newValue });
  };

  const handleCaratChange = (event, newValue) => {
    setFilter({
      ...filter,
      caratRange: newValue,
    });
    onFilterChange({ ...filter, caratRange: newValue });
  };

  const handleSortChange = (event) => {
    setSort(event.target.value);
    onSortChange(event.target.value);
  };

  return (
    <Box display="flex" flexDirection="column" p={2} bgcolor="#eeeeee" gap={2}>
      <Stack direction="row" spacing={2}>
        <FormControl fullWidth>
          <InputLabel>Shape</InputLabel>
          <Select
            name="shape"
            value={filter.shape}
            onChange={handleFilterChange}
          >
            <MenuItem value=""><em>All Shapes</em></MenuItem>
            <MenuItem value="Round">Round</MenuItem>
            <MenuItem value="Princess">Princess</MenuItem>
            <MenuItem value="Cushion">Cushion</MenuItem>
            <MenuItem value="Emerald">Emerald</MenuItem>
            <MenuItem value="Oval">Oval</MenuItem>
            <MenuItem value="Radiant">Radiant</MenuItem>
            <MenuItem value="Asscher">Asscher</MenuItem>
            <MenuItem value="Marquise">Marquise</MenuItem>
            <MenuItem value="Heart">Heart</MenuItem>
            <MenuItem value="Pear">Pear</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel>Color</InputLabel>
          <Select
            name="color"
            value={filter.color}
            onChange={handleFilterChange}
          >
            <MenuItem value=""><em>All Colors</em></MenuItem>
            <MenuItem value="D">D</MenuItem>
            <MenuItem value="E">E</MenuItem>
            <MenuItem value="F">F</MenuItem>
            <MenuItem value="G">G</MenuItem>
            <MenuItem value="H">H</MenuItem>
            <MenuItem value="I">I</MenuItem>
            <MenuItem value="J">J</MenuItem>
            <MenuItem value="K">K</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel>Clarity</InputLabel>
          <Select
            name="clarity"
            value={filter.clarity}
            onChange={handleFilterChange}
          >
            <MenuItem value=""><em>All Clarities</em></MenuItem>
            <MenuItem value="FL">FL</MenuItem>
            <MenuItem value="IF">IF</MenuItem>
            <MenuItem value="VVS1">VVS1</MenuItem>
            <MenuItem value="VVS2">VVS2</MenuItem>
            <MenuItem value="VS1">VS1</MenuItem>
            <MenuItem value="VS2">VS2</MenuItem>
            <MenuItem value="SI1">SI1</MenuItem>
            <MenuItem value="SI2">SI2</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel>Cut</InputLabel>
          <Select
            name="cut"
            value={filter.cut}
            onChange={handleFilterChange}
          >
            <MenuItem value=""><em>All Cuts</em></MenuItem>
            <MenuItem value="Good">Good</MenuItem>
            <MenuItem value="Very Good">Very Good</MenuItem>
            <MenuItem value="Ideal">Ideal</MenuItem>
            <MenuItem value="Astor Ideal">Astor Ideal</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      <Stack direction="row" spacing={2} alignItems="center">
        <Typography>Price Range</Typography>
        <Slider
          value={filter.priceRange}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          min={0}
          max={5000000}
        />
      </Stack>
      <Stack direction="row" spacing={2} alignItems="center">
        <Typography>Carat Range</Typography>
        <Slider
          value={filter.caratRange}
          onChange={handleCaratChange}
          valueLabelDisplay="auto"
          min={0}
          max={8}
        />
      </Stack>
      <Stack direction="row" spacing={2} alignItems="center">
        <Typography>Sort By</Typography>
        <FormControl fullWidth>
          <Select
            value={sort}
            onChange={handleSortChange}
            displayEmpty
          >
            <MenuItem value=""><em>No Sort</em></MenuItem>
            <MenuItem value="price">Price</MenuItem>
            <MenuItem value="caratWeight">Carat Weight</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </Box>
  );
};

export default CustomToolbar;
