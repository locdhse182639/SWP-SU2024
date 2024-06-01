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
    Tabs,
    Tab,
    AppBar
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import DashboardNav from './DashboardNav';

const ProductManage = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [diamonds, setDiamonds] = useState([]);
    const [rings, setRings] = useState([]);
    const [necklaces, setNecklaces] = useState([]);
    const [open, setOpen] = useState(false);
    const [editingItem, setEditingItem] = useState(null);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    useEffect(() => {
        fetchDiamonds();
        fetchRings();
        fetchNecklaces();
    }, []);

    const fetchDiamonds = async () => {
        try {
            const response = await fetch('https://localhost:7236/api/Diamonds');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);
            setDiamonds(data);
        } catch (error) {
            console.log('Error fetching diamonds', error);
        }
    };

    const fetchRings = async () => {
        try {
            const response = await fetch('https://localhost:7236/api/Rings');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setRings(data);
        } catch (error) {
            console.log('Error fetching rings', error);
        }
    };

    const fetchNecklaces = async () => {
        try {
            const response = await fetch('https://localhost:7236/api/Necklaces');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setNecklaces(data);
        } catch (error) {
            console.log('Error fetching necklaces', error);
        }
    };

    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
    };

    const handleOpen = (item) => {
        setEditingItem(item || (tabIndex === 0 ? {
            diamondId: null,
            name: '',
            shape: '',
            cut: '',
            color: '',
            clarity: '',
            caratWeight: '',
            fluorescence: '',
            lengthWidthRatio: '',
            depth: '',
            tables: '',
            symmetry: '',
            girdle: '',
            measurements: '',
            certificate: '',
            price: '',
            description: ''
        } : tabIndex === 1 ? {
            ringId: null,
            ringName: '',
            jewelryId: '',
            type: '',
            width: '',
            shape: '',
            quantity: '',
            totalCaratAverage: '',
            color: '',
            clarity: '',
            price: '',
            description: ''
        } : {
            necklacesId: null,
            necklacesName: '',
            jewelryId: '',
            type: '',
            chainType: '',
            chainLength: '',
            claspType: '',
            shape: '',
            quantity: '',
            totalCaratAverage: '',
            color: '',
            clarity: '',
            enhancementType: '',
            price: '',
            description: ''
        }));
        setOpen(true);
    };

    const handleClose = () => {
        setEditingItem(null);
        setOpen(false);
    };

    const handleSave = async () => {
        try {
            if (tabIndex === 0) {
                if (editingItem.diamondId) {
                    console.log('edit new diamond:', editingItem);
                    await fetch(`https://localhost:7236/api/Diamonds/${editingItem.diamondId}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(editingItem)
                    });
                } else {
                    console.log('Adding new diamond:', editingItem);
                    const newDiamond = { ...editingItem, diamondId: diamonds.length ? Math.max(...diamonds.map(d => d.diamondId)) + 1 : 1 };
                    console.log('Payload for new diamond:', newDiamond);
                    await fetch('https://localhost:7236/api/Diamonds', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(newDiamond)
                    });
                }
                fetchDiamonds();
            } else if (tabIndex === 1) {
                if (editingItem.ringId) {
                    await fetch(`https://localhost:7236/api/Rings/${editingItem.ringId}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(editingItem)
                    });
                } else {
                    const newRing = { ...editingItem, ringId: rings.length ? Math.max(...rings.map(r => r.ringId)) + 1 : 1 };
                    console.log('Payload for new ring:', newRing);
                    await fetch('https://localhost:7236/api/Rings', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(newRing)
                    });
                }
                fetchRings();
            } else if (tabIndex === 2) {
                if (editingItem.necklacesId) {
                    await fetch(`https://localhost:7236/api/Necklaces/${editingItem.necklacesId}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(editingItem)
                    });
                } else {
                    const newNecklace = { ...editingItem, necklacesId: necklaces.length ? Math.max(...necklaces.map(n => n.necklacesId)) + 1 : 1 };
                    console.log('Payload for new necklace:', newNecklace);
                    await fetch('https://localhost:7236/api/Necklaces', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(newNecklace)
                    });
                }
                fetchNecklaces();
            }
            handleClose();
        } catch (error) {
            console.log('Error saving item', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            if (tabIndex === 0) {
                await fetch(`https://localhost:7236/api/Diamonds/${id}`, {
                    method: 'DELETE'
                });
                fetchDiamonds();
            } else if (tabIndex === 1) {
                await fetch(`https://localhost:7236/api/Rings/${id}`, {
                    method: 'DELETE'
                });
                fetchRings();
            } else if (tabIndex === 2) {
                await fetch(`https://localhost:7236/api/Necklaces/${id}`, {
                    method: 'DELETE'
                });
                fetchNecklaces();
            }
        } catch (error) {
            console.log('Error deleting item', error);
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
                <AppBar position="static">
                    <Tabs value={tabIndex} onChange={handleTabChange} variant="fullWidth">
                        <Tab label="Diamonds" />
                        <Tab label="Rings" />
                        <Tab label="Necklaces" />
                    </Tabs>
                </AppBar>
                {tabIndex === 0 && (
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">DiamondID</TableCell>
                                    <TableCell align="center">Name</TableCell>
                                    <TableCell align="center">Shape</TableCell>
                                    <TableCell align="center">Cut</TableCell>
                                    <TableCell align="center">Color</TableCell>
                                    <TableCell align="center">Clarity</TableCell>
                                    <TableCell align="center">CaratWeight</TableCell>
                                    <TableCell align="center">Fluorescence</TableCell>
                                    <TableCell align="center">LengthWidthRatio</TableCell>
                                    <TableCell align="center">Depth</TableCell>
                                    <TableCell align="center">Tables</TableCell>
                                    <TableCell align="center">Symmetry</TableCell>
                                    <TableCell align="center">Girdle</TableCell>
                                    <TableCell align="center">Measurements</TableCell>
                                    <TableCell align="center">Certificate</TableCell>
                                    <TableCell align="center">Price</TableCell>
                                    <TableCell align="center">Description</TableCell>
                                    <TableCell align="center">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {diamonds.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((diamond) => (
                                    <TableRow key={diamond.diamondId}>
                                        <TableCell align="center">{diamond.diamondId}</TableCell>
                                        <TableCell align="center">{diamond.name}</TableCell>
                                        <TableCell align="center">{diamond.shape}</TableCell>
                                        <TableCell align="center">{diamond.cut}</TableCell>
                                        <TableCell align="center">{diamond.color}</TableCell>
                                        <TableCell align="center">{diamond.clarity}</TableCell>
                                        <TableCell align="center">{diamond.caratWeight}</TableCell>
                                        <TableCell align="center">{diamond.fluorescence}</TableCell>
                                        <TableCell align="center">{diamond.lengthWidthRatio}</TableCell>
                                        <TableCell align="center">{diamond.depth}</TableCell>
                                        <TableCell align="center">{diamond.tables}</TableCell>
                                        <TableCell align="center">{diamond.symmetry}</TableCell>
                                        <TableCell align="center">{diamond.girdle}</TableCell>
                                        <TableCell align="center">{diamond.measurements}</TableCell>
                                        <TableCell align="center">{diamond.certificate}</TableCell>
                                        <TableCell align="center">{diamond.price}</TableCell>
                                        <TableCell align="center">{diamond.description}</TableCell>
                                        <TableCell align="center">
                                            <IconButton onClick={() => handleOpen(diamond)}>
                                                <Edit />
                                            </IconButton>
                                            <IconButton onClick={() => handleDelete(diamond.diamondId)}>
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
                            count={diamonds.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                        <Button variant="contained" color="primary" onClick={() => handleOpen(null)}>
                            Add Diamond
                        </Button>
                    </TableContainer>
                )}
                {tabIndex === 1 && (
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">RingID</TableCell>
                                    <TableCell align="center">RingName</TableCell>
                                    <TableCell align="center">JewelryId</TableCell>
                                    <TableCell align="center">Type</TableCell>
                                    <TableCell align="center">Width</TableCell>
                                    <TableCell align="center">Shape</TableCell>
                                    <TableCell align="center">Quantity</TableCell>
                                    <TableCell align="center">TotalCaratAverage</TableCell>
                                    <TableCell align="center">Color</TableCell>
                                    <TableCell align="center">Clarity</TableCell>
                                    <TableCell align="center">Price</TableCell>
                                    <TableCell align="center">Description</TableCell>
                                    <TableCell align="center">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rings.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((ring) => (
                                    <TableRow key={ring.ringId}>
                                        <TableCell align="center">{ring.ringId}</TableCell>
                                        <TableCell align="center">{ring.ringName}</TableCell>
                                        <TableCell align="center">{ring.jewelryId}</TableCell>
                                        <TableCell align="center">{ring.type}</TableCell>
                                        <TableCell align="center">{ring.width}</TableCell>
                                        <TableCell align="center">{ring.shape}</TableCell>
                                        <TableCell align="center">{ring.quantity}</TableCell>
                                        <TableCell align="center">{ring.totalCaratAverage}</TableCell>
                                        <TableCell align="center">{ring.color}</TableCell>
                                        <TableCell align="center">{ring.clarity}</TableCell>
                                        <TableCell align="center">{ring.price}</TableCell>
                                        <TableCell align="center">{ring.description}</TableCell>
                                        <TableCell align="center">
                                            <IconButton onClick={() => handleOpen(ring)}>
                                                <Edit />
                                            </IconButton>
                                            <IconButton onClick={() => handleDelete(ring.ringId)}>
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
                            count={rings.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                        <Button variant="contained" color="primary" onClick={() => handleOpen(null)}>
                            Add Ring
                        </Button>
                    </TableContainer>
                )}
                {tabIndex === 2 && (
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">NecklacesID</TableCell>
                                    <TableCell align="center">NecklacesName</TableCell>
                                    <TableCell align="center">JewelryId</TableCell>
                                    <TableCell align="center">Type</TableCell>
                                    <TableCell align="center">ChainType</TableCell>
                                    <TableCell align="center">ChainLength</TableCell>
                                    <TableCell align="center">ClaspType</TableCell>
                                    <TableCell align="center">Shape</TableCell>
                                    <TableCell align="center">Quantity</TableCell>
                                    <TableCell align="center">TotalCaratAverage</TableCell>
                                    <TableCell align="center">Color</TableCell>
                                    <TableCell align="center">Clarity</TableCell>
                                    <TableCell align="center">EnhancementType</TableCell>
                                    <TableCell align="center">Price</TableCell>
                                    <TableCell align="center">Description</TableCell>
                                    <TableCell align="center">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {necklaces.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((necklace) => (
                                    <TableRow key={necklace.necklacesId}>
                                        <TableCell align="center">{necklace.necklacesId}</TableCell>
                                        <TableCell align="center">{necklace.necklacesName}</TableCell>
                                        <TableCell align="center">{necklace.jewelryId}</TableCell>
                                        <TableCell align="center">{necklace.type}</TableCell>
                                        <TableCell align="center">{necklace.chainType}</TableCell>
                                        <TableCell align="center">{necklace.chainLength}</TableCell>
                                        <TableCell align="center">{necklace.claspType}</TableCell>
                                        <TableCell align="center">{necklace.shape}</TableCell>
                                        <TableCell align="center">{necklace.quantity}</TableCell>
                                        <TableCell align="center">{necklace.totalCaratAverage}</TableCell>
                                        <TableCell align="center">{necklace.color}</TableCell>
                                        <TableCell align="center">{necklace.clarity}</TableCell>
                                        <TableCell align="center">{necklace.enhancementType}</TableCell>
                                        <TableCell align="center">{necklace.price}</TableCell>
                                        <TableCell align="center">{necklace.description}</TableCell>
                                        <TableCell align="center">
                                            <IconButton onClick={() => handleOpen(necklace)}>
                                                <Edit />
                                            </IconButton>
                                            <IconButton onClick={() => handleDelete(necklace.necklacesId)}>
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
                            count={necklaces.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                        <Button variant="contained" color="primary" onClick={() => handleOpen(null)}>
                            Add Necklace
                        </Button>
                    </TableContainer>
                )}
                {/* Similar code for Rings and Necklaces */}
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>{editingItem?.diamondId || editingItem?.ringId || editingItem?.necklacesId ? 'Edit Item' : 'Add Item'}</DialogTitle>
                    <DialogContent>
                        {tabIndex === 0 && (
                            <>
                                {editingItem?.diamondId && (
                                    <TextField
                                        margin="dense"
                                        label="DiamondID"
                                        type="text"
                                        fullWidth
                                        value={editingItem.diamondId}
                                        disabled
                                    />
                                )}
                                <TextField
                                    margin="dense"
                                    label="Name"
                                    type="text"
                                    fullWidth
                                    value={editingItem?.name || ''}
                                    onChange={(e) => setEditingItem({ ...editingItem, name: e.target.value })}
                                />
                                <TextField
                                    margin="dense"
                                    label="Shape"
                                    type="text"
                                    fullWidth
                                    value={editingItem?.shape || ''}
                                    onChange={(e) => setEditingItem({ ...editingItem, shape: e.target.value })}
                                />
                                <TextField
                                    margin="dense"
                                    label="Cut"
                                    type="text"
                                    fullWidth
                                    value={editingItem?.cut || ''}
                                    onChange={(e) => setEditingItem({ ...editingItem, cut: e.target.value })}
                                />
                                <TextField
                                    margin="dense"
                                    label="Color"
                                    type="text"
                                    fullWidth
                                    value={editingItem?.color || ''}
                                    onChange={(e) => setEditingItem({ ...editingItem, color: e.target.value })}
                                />
                                <TextField
                                    margin="dense"
                                    label="Clarity"
                                    type="text"
                                    fullWidth
                                    value={editingItem?.clarity || ''}
                                    onChange={(e) => setEditingItem({ ...editingItem, clarity: e.target.value })}
                                />
                                <TextField
                                    margin="dense"
                                    label="CaratWeight"
                                    type="number"
                                    fullWidth
                                    value={editingItem?.caratWeight || ''}
                                    onChange={(e) => setEditingItem({ ...editingItem, caratWeight: parseFloat(e.target.value) })}
                                />
                                <TextField
                                    margin="dense"
                                    label="Fluorescence"
                                    type="text"
                                    fullWidth
                                    value={editingItem?.fluorescence || ''}
                                    onChange={(e) => setEditingItem({ ...editingItem, fluorescence: e.target.value })}
                                />
                                <TextField
                                    margin="dense"
                                    label="LengthWidthRatio"
                                    type="number"
                                    fullWidth
                                    value={editingItem?.lengthWidthRatio || ''}
                                    onChange={(e) => setEditingItem({ ...editingItem, lengthWidthRatio: parseFloat(e.target.value) })}
                                />
                                <TextField
                                    margin="dense"
                                    label="Depth"
                                    type="number"
                                    fullWidth
                                    value={editingItem?.depth || ''}
                                    onChange={(e) => setEditingItem({ ...editingItem, depth: parseFloat(e.target.value) })}
                                />
                                <TextField
                                    margin="dense"
                                    label="Tables"
                                    type="number"
                                    fullWidth
                                    value={editingItem?.tables || ''}
                                    onChange={(e) => setEditingItem({ ...editingItem, tables: parseFloat(e.target.value) })}
                                />
                                <TextField
                                    margin="dense"
                                    label="Symmetry"
                                    type="text"
                                    fullWidth
                                    value={editingItem?.symmetry || ''}
                                    onChange={(e) => setEditingItem({ ...editingItem, symmetry: e.target.value })}
                                />
                                <TextField
                                    margin="dense"
                                    label="Girdle"
                                    type="text"
                                    fullWidth
                                    value={editingItem?.girdle || ''}
                                    onChange={(e) => setEditingItem({ ...editingItem, girdle: e.target.value })}
                                />
                                <TextField
                                    margin="dense"
                                    label="Measurements"
                                    type="text"
                                    fullWidth
                                    value={editingItem?.measurements || ''}
                                    onChange={(e) => setEditingItem({ ...editingItem, measurements: e.target.value })}
                                />
                                <TextField
                                    margin="dense"
                                    label="Certificate"
                                    type="text"
                                    fullWidth
                                    value={editingItem?.certificate || ''}
                                    onChange={(e) => setEditingItem({ ...editingItem, certificate: e.target.value })}
                                />
                                <TextField
                                    margin="dense"
                                    label="Price"
                                    type="number"
                                    fullWidth
                                    value={editingItem?.price || ''}
                                    onChange={(e) => setEditingItem({ ...editingItem, price: parseFloat(e.target.value) })}
                                />
                                <TextField
                                    margin="dense"
                                    label="Description"
                                    type="text"
                                    fullWidth
                                    value={editingItem?.description || ''}
                                    onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })}
                                />
                            </>
                        )}
                        {tabIndex === 1 && (
                            <>
                                {editingItem?.ringId && (
                                    <TextField
                                        margin="dense"
                                        label="RingID"
                                        type="text"
                                        fullWidth
                                        value={editingItem.ringId}
                                        disabled
                                    />
                                )}
                                <TextField
                                    margin="dense"
                                    label="RingName"
                                    type="text"
                                    fullWidth
                                    value={editingItem?.ringName || ''}
                                    onChange={(e) => setEditingItem({ ...editingItem, ringName: e.target.value })}
                                />
                                <TextField
                                    margin="dense"
                                    label="Type"
                                    type="text"
                                    fullWidth
                                    value={editingItem?.type || ''}
                                    onChange={(e) => setEditingItem({ ...editingItem, type: e.target.value })}
                                />
                                <TextField
                                    margin="dense"
                                    label="Width"
                                    type="number"
                                    fullWidth
                                    value={editingItem?.width || ''}
                                    onChange={(e) => setEditingItem({ ...editingItem, width: parseFloat(e.target.value) })}
                                />
                                <TextField
                                    margin="dense"
                                    label="Shape"
                                    type="text"
                                    fullWidth
                                    value={editingItem?.shape || ''}
                                    onChange={(e) => setEditingItem({ ...editingItem, shape: e.target.value })}
                                />
                                <TextField
                                    margin="dense"
                                    label="Quantity"
                                    type="number"
                                    fullWidth
                                    value={editingItem?.quantity || ''}
                                    onChange={(e) => setEditingItem({ ...editingItem, quantity: parseInt(e.target.value, 10) })}
                                />
                                <TextField
                                    margin="dense"
                                    label="TotalCaratAverage"
                                    type="number"
                                    fullWidth
                                    value={editingItem?.totalCaratAverage || ''}
                                    onChange={(e) => setEditingItem({ ...editingItem, totalCaratAverage: parseFloat(e.target.value) })}
                                />
                                <TextField
                                    margin="dense"
                                    label="Color"
                                    type="text"
                                    fullWidth
                                    value={editingItem?.color || ''}
                                    onChange={(e) => setEditingItem({ ...editingItem, color: e.target.value })}
                                />
                                <TextField
                                    margin="dense"
                                    label="Clarity"
                                    type="text"
                                    fullWidth
                                    value={editingItem?.clarity || ''}
                                    onChange={(e) => setEditingItem({ ...editingItem, clarity: e.target.value })}
                                />
                                <TextField
                                    margin="dense"
                                    label="Price"
                                    type="number"
                                    fullWidth
                                    value={editingItem?.price || ''}
                                    onChange={(e) => setEditingItem({ ...editingItem, price: parseFloat(e.target.value) })}
                                />
                                <TextField
                                    margin="dense"
                                    label="Description"
                                    type="text"
                                    fullWidth
                                    value={editingItem?.description || ''}
                                    onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })}
                                />
                            </>
                        )}

                        {tabIndex === 2 && (
                            <>
                                {editingItem?.necklacesId && (
                                    <TextField
                                        margin="dense"
                                        label="NecklacesID"
                                        type="text"
                                        fullWidth
                                        value={editingItem.necklacesId}
                                        disabled
                                    />
                                )}
                                <TextField
                                    margin="dense"
                                    label="NecklacesName"
                                    type="text"
                                    fullWidth
                                    value={editingItem?.necklacesName || ''}
                                    onChange={(e) => setEditingItem({ ...editingItem, necklacesName: e.target.value })}
                                />
                                <TextField
                                    margin="dense"
                                    label="JewelryId"
                                    type="number"
                                    fullWidth
                                    value={editingItem?.jewelryId || ''}
                                    onChange={(e) => setEditingItem({ ...editingItem, jewelryId: parseInt(e.target.value, 10) })}
                                />
                                <TextField
                                    margin="dense"
                                    label="Type"
                                    type="text"
                                    fullWidth
                                    value={editingItem?.type || ''}
                                    onChange={(e) => setEditingItem({ ...editingItem, type: e.target.value })}
                                />
                                <TextField
                                    margin="dense"
                                    label="ChainType"
                                    type="text"
                                    fullWidth
                                    value={editingItem?.chainType || ''}
                                    onChange={(e) => setEditingItem({ ...editingItem, chainType: e.target.value })}
                                />
                                <TextField
                                    margin="dense"
                                    label="ChainLength"
                                    type="number"
                                    fullWidth
                                    value={editingItem?.chainLength || ''}
                                    onChange={(e) => setEditingItem({ ...editingItem, chainLength: parseFloat(e.target.value) })}
                                />
                                <TextField
                                    margin="dense"
                                    label="ClaspType"
                                    type="text"
                                    fullWidth
                                    value={editingItem?.claspType || ''}
                                    onChange={(e) => setEditingItem({ ...editingItem, claspType: e.target.value })}
                                />
                                <TextField
                                    margin="dense"
                                    label="Shape"
                                    type="text"
                                    fullWidth
                                    value={editingItem?.shape || ''}
                                    onChange={(e) => setEditingItem({ ...editingItem, shape: e.target.value })}
                                />
                                <TextField
                                    margin="dense"
                                    label="Quantity"
                                    type="number"
                                    fullWidth
                                    value={editingItem?.quantity || ''}
                                    onChange={(e) => setEditingItem({ ...editingItem, quantity: parseInt(e.target.value, 10) })}
                                />
                                <TextField
                                    margin="dense"
                                    label="TotalCaratAverage"
                                    type="number"
                                    fullWidth
                                    value={editingItem?.totalCaratAverage || ''}
                                    onChange={(e) => setEditingItem({ ...editingItem, totalCaratAverage: parseFloat(e.target.value) })}
                                />
                                <TextField
                                    margin="dense"
                                    label="Color"
                                    type="text"
                                    fullWidth
                                    value={editingItem?.color || ''}
                                    onChange={(e) => setEditingItem({ ...editingItem, color: e.target.value })}
                                />
                                <TextField
                                    margin="dense"
                                    label="Clarity"
                                    type="text"
                                    fullWidth
                                    value={editingItem?.clarity || ''}
                                    onChange={(e) => setEditingItem({ ...editingItem, clarity: e.target.value })}
                                />
                                <TextField
                                    margin="dense"
                                    label="EnhancementType"
                                    type="text"
                                    fullWidth
                                    value={editingItem?.enhancementType || ''}
                                    onChange={(e) => setEditingItem({ ...editingItem, enhancementType: e.target.value })}
                                />
                                <TextField
                                    margin="dense"
                                    label="Price"
                                    type="number"
                                    fullWidth
                                    value={editingItem?.price || ''}
                                    onChange={(e) => setEditingItem({ ...editingItem, price: parseFloat(e.target.value) })}
                                />
                                <TextField
                                    margin="dense"
                                    label="Description"
                                    type="text"
                                    fullWidth
                                    value={editingItem?.description || ''}
                                    onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })}
                                />
                            </>
                        )}
                        {/* Similar fields for Rings and Necklaces */}
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

export default ProductManage;
