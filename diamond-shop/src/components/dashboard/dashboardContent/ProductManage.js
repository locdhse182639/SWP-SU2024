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
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Tabs,
    Tab,
    AppBar,
    IconButton,
    TextField,
    MenuItem
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import DashboardNav from './DashboardNav';
import { useAuth } from '../../authcontext';
import StaffNav from './../../staffsite/StaffNav';
import './ProductManage.css'; // Import the CSS file

const ProductManage = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [open, setOpen] = useState(false);
    const [openPriceDetail, setOpenPriceDetail] = useState(false);
    const [editingItem, setEditingItem] = useState(null);
    const [priceDetails, setPriceDetails] = useState({
        diamondprice: '',
        jewelryprice: '',
        processingprice: '',
        profit: ''
    });
    const [productData, setProductData] = useState([]);
    const [diamondData, setDiamondData] = useState([]);

    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
    };

    const handleOpen = (item) => {
        setEditingItem(item);
        setOpen(true);
    };

    const handleClose = () => {
        setEditingItem(null);
        setPriceDetails({
            diamondprice: '',
            jewelryprice: '',
            processingprice: '',
            profit: ''
        });
        setOpen(false);
        setOpenPriceDetail(false);
    };

    const fetchProducts = async () => {
        try {
            const response = await fetch('https://localhost:7251/api/Products');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setProductData(data);
        } catch (error) {
            console.log('Error fetching products', error);
        }
    };

    const fetchDiamonds = async () => {
        try {
            const response = await fetch('https://localhost:7251/api/Diamonds');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setDiamondData(data);
        } catch (error) {
            console.log('Error fetching diamonds', error);
        }
    };

    useEffect(() => {
        fetchProducts();
        fetchDiamonds();
    }, []);

    const calculatePrice = () => {
        const { diamondprice, jewelryprice, processingprice, profit } = priceDetails;
        return (parseFloat(diamondprice) + parseFloat(jewelryprice) + parseFloat(processingprice)) + ((parseFloat(diamondprice) + parseFloat(jewelryprice) + parseFloat(processingprice)) * (parseFloat(profit) / 100));
    };

    const handlePriceDetailChange = (event) => {
        setPriceDetails({ ...priceDetails, [event.target.name]: event.target.value });
    };

    const handlePriceFieldClick = () => {
        setOpenPriceDetail(true);
    };

    const handlePriceDetailSave = () => {
        const calculatedPrice = calculatePrice();
        setEditingItem({ ...editingItem, price: calculatedPrice });
        setOpenPriceDetail(false);
    };

    const savePriceDetail = async (productId) => {
        const priceDetailData = {
            productID: productId,
            diamondPrice: priceDetails.diamondprice,
            jewelryPrice: priceDetails.jewelryprice,
            processingPrice: priceDetails.processingprice,
            profit: priceDetails.profit
        };

        try {
            const response = await fetch('https://localhost:7251/api/PriceDetail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(priceDetailData)
            });

            if (!response.ok) {
                throw new Error('Failed to save PriceDetail');
            }

            const data = await response.json();
            console.log('PriceDetail saved successfully:', data);
        } catch (error) {
            console.error('Error saving PriceDetail:', error);
        }
    };

    const handleFinalSave = async () => {
        try {
            let newProduct;
            if (tabIndex === 0) {
                // Handling Jewelry Save
                if (editingItem.productId) {
                    // Update existing product
                    await fetch(`https://localhost:7251/api/Products/${editingItem.productId}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(editingItem)
                    });
                    newProduct = editingItem;
                } else {
                    // Create new product
                    const response = await fetch('https://localhost:7251/api/Products', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            productName: editingItem.productName,
                            productType: editingItem.productType,
                            type: editingItem.type,
                            size: editingItem.size,
                            description: editingItem.description,
                            price: editingItem.price,
                            quantity: editingItem.quantity,
                            diamondId: editingItem.diamondId,
                            image1: editingItem.image1,
                            image2: editingItem.image2,
                            image3: editingItem.image3
                        })
                    });

                    if (!response.ok) {
                        const errorData = await response.json();
                        console.error('Error creating product:', errorData);
                        throw new Error('Failed to create product');
                    }

                    newProduct = await response.json();
                }
                await savePriceDetail(newProduct.productId);
                fetchProducts();
            } else {
                // Handling Diamond Save
                if (editingItem.diamondId) {
                    // Update existing diamond
                    await fetch(`https://localhost:7251/api/Diamonds/${editingItem.diamondId}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(editingItem)
                    });
                    await fetch(`https://localhost:7251/api/Products/${editingItem.productId}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(editingItem)
                    });
                    newProduct = editingItem;
                } else {
                    // Create new diamond
                    const newDiamondResponse = await fetch('https://localhost:7251/api/Diamonds', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(editingItem)
                    });

                    if (!newDiamondResponse.ok) {
                        const errorData = await newDiamondResponse.json();
                        console.error('Error creating diamond:', errorData);
                        throw new Error('Failed to create diamond');
                    }

                    const newDiamond = await newDiamondResponse.json();
                    const productResponse = await fetch('https://localhost:7251/api/Products', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            productName: editingItem.productName,
                            productType: 1,
                            description: editingItem.description,
                            price: editingItem.price,
                            diamondId: newDiamond.diamondId
                        })
                    });

                    if (!productResponse.ok) {
                        const errorData = await productResponse.json();
                        console.error('Error creating product:', errorData);
                        throw new Error('Failed to create product');
                    }

                    newProduct = await productResponse.json();
                }
                await savePriceDetail(newProduct.productId);
                fetchDiamonds();
                fetchProducts();
            }

            handleClose();
        } catch (error) {
            console.log('Error saving item', error);
        }
    };

    const handleDelete = async (id) => {
        console.log('Deleting item with id:', id); // Debug log

        try {
            if (tabIndex === 0) {
                // Delete from product table
                const response = await fetch(`https://localhost:7251/api/Products/${id}`, {
                    method: 'DELETE'
                });
                if (!response.ok) {
                    throw new Error(`Failed to delete product with id ${id}`);
                }
                console.log(`Product with id ${id} deleted successfully.`);
            } else {
                // Find product with the given diamondId
                const product = productData.find(p => p.diamondId === id);
                if (product) {
                    // Delete the associated product
                    const productResponse = await fetch(`https://localhost:7251/api/Products/${product.productId}`, {
                        method: 'DELETE',
                    });
                    if (!productResponse.ok) {
                        throw new Error(`Failed to delete product with id ${product.productId}`);
                    }
                    console.log(`Product with id ${product.productId} deleted successfully.`);
                }

                // Delete the diamond itself
                const diamondResponse = await fetch(`https://localhost:7251/api/Diamonds/${id}`, {
                    method: 'DELETE',
                });
                if (!diamondResponse.ok) {
                    throw new Error(`Failed to delete diamond with id ${id}`);
                }
                console.log(`Diamond with id ${id} deleted successfully.`);
            }
            fetchProducts();
            fetchDiamonds();
        } catch (error) {
            console.log('Error deleting item', error);
        }
    };

    const { user } = useAuth();

    return (
        <div>
            <div>
                {user && user.roleId === 3 ? (
                    <StaffNav />
                ) : (
                    <DashboardNav />
                )}
            </div>
            <div className='container-fluid'>
                <div className='cate' position="static">
                    <Tabs value={tabIndex} onChange={handleTabChange} variant="fullWidth">
                        <Tab label="Jewelry" />
                        <Tab label="Diamonds" />
                    </Tabs>
                </div>

                {tabIndex === 0 && (
                    <TableContainer component={Paper} className="table-container">
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Productid</TableCell>
                                    <TableCell align="center">Product Name</TableCell>
                                    <TableCell align="center">Product Type</TableCell>
                                    <TableCell align="center">Type</TableCell>
                                    <TableCell align="center">Size</TableCell>
                                    <TableCell align="center">Description</TableCell>
                                    <TableCell align="center">Price</TableCell>
                                    <TableCell align="center">Quantity</TableCell>
                                    <TableCell align="center">Image 1</TableCell>
                                    <TableCell align="center">Image 2</TableCell>
                                    <TableCell align="center">Image 3</TableCell>
                                    <TableCell align="center">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {productData.filter(product => product.productType !== 1).map((product) => (
                                    <TableRow key={product.productId}>
                                        <TableCell align="center">{product.productId}</TableCell>
                                        <TableCell align="center">{product.productName}</TableCell>
                                        <TableCell align="center">{product.productType}</TableCell>
                                        <TableCell align="center">{product.type}</TableCell>
                                        <TableCell align="center">{product.size}</TableCell>
                                        <TableCell align="center">{product.description}</TableCell>
                                        <TableCell align="center">{product.price}</TableCell>
                                        <TableCell align="center">{product.quantity}</TableCell>
                                        <TableCell align="center">
                                            <img src={product.image1} alt="Product Image 1" />
                                        </TableCell>
                                        <TableCell align="center">
                                            <img src={product.image2} alt="Product Image 2" />
                                        </TableCell>
                                        <TableCell align="center">
                                            <img src={product.image3} alt="Product Image 3" />
                                        </TableCell>
                                        <TableCell align="center">
                                            <IconButton onClick={() => handleOpen(product)}>
                                                <Edit />
                                            </IconButton>
                                            <IconButton onClick={() => handleDelete(product.productId)}>
                                                <Delete />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
                {tabIndex === 1 && (
                    <TableContainer component={Paper} className="table-container">
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Product ID</TableCell>
                                    <TableCell align="center">Product Name</TableCell>
                                    <TableCell align="center">Description</TableCell>
                                    <TableCell align="center">Shape</TableCell>
                                    <TableCell align="center">Cut</TableCell>
                                    <TableCell align="center">Color</TableCell>
                                    <TableCell align="center">Clarity</TableCell>
                                    <TableCell align="center">Carat Weight</TableCell>
                                    <TableCell align="center">Fluorescence</TableCell>
                                    <TableCell align="center">Length Width Ratio</TableCell>
                                    <TableCell align="center">Depth</TableCell>
                                    <TableCell align="center">Tables</TableCell>
                                    <TableCell align="center">Symmetry</TableCell>
                                    <TableCell align="center">Girdle</TableCell>
                                    <TableCell align="center">Measurements</TableCell>
                                    <TableCell align="center">Certificate</TableCell>
                                    <TableCell align="center">Price</TableCell>
                                    <TableCell align="center">Image 1</TableCell>
                                    <TableCell align="center">Image 2</TableCell>
                                    <TableCell align="center">Image 3</TableCell>
                                    <TableCell align="center">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {productData.filter(product => product.productType === 1).map((product) => {
                                    const diamond = diamondData.find(d => d.diamondId === product.diamondId) || {};
                                    return (
                                        <TableRow key={product.productId}>
                                            <TableCell align="center">{product.productId}</TableCell>
                                            <TableCell align="center">{product.productName}</TableCell>
                                            <TableCell align="center">{product.description}</TableCell>
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
                                            <TableCell align="center">{product.price}</TableCell>
                                            <TableCell align="center">
                                                <img src={product.image1} alt="Diamond Image 1" />
                                            </TableCell>
                                            <TableCell align="center">
                                                <img src={product.image2} alt="Diamond Image 2" />
                                            </TableCell>
                                            <TableCell align="center">
                                                <img src={product.image3} alt="Diamond Image 3" />
                                            </TableCell>
                                            <TableCell align="center">
                                                <IconButton onClick={() => handleOpen(product)}>
                                                    <Edit />
                                                </IconButton>
                                                <IconButton onClick={() => handleDelete(product.diamondId)}>
                                                    <Delete />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}

                <div className="add-product-button">
                    <Button variant="contained" color="primary" onClick={() => handleOpen(null)}>
                        Add {tabIndex === 0 ? 'Jewelry' : 'Diamond'}
                    </Button>
                </div>

                {/* Product Detail Popup */}
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>{editingItem?.productId ? 'Edit Item' : 'Add Item'}</DialogTitle>
                    <DialogContent>
                        {tabIndex === 0 && (
                            <>
                                <TextField
                                    margin="dense"
                                    label="Product Name"
                                    type="text"
                                    fullWidth
                                    value={editingItem?.productName || ''}
                                    onChange={(e) => setEditingItem({ ...editingItem, productName: e.target.value })}
                                />
                                <TextField
                                    select
                                    margin="dense"
                                    label="Product Type"
                                    fullWidth
                                    value={editingItem?.productType || ''}
                                    onChange={(e) => setEditingItem({ ...editingItem, productType: e.target.value })}
                                    SelectProps={{
                                        native: true,
                                    }}
                                >
                                    <option value="" disabled></option>
                                    <option value={2}>Ring</option>
                                    <option value={3}>Necklaces</option>
                                </TextField>
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
                                    label="Size"
                                    type="text"
                                    fullWidth
                                    value={editingItem?.size || ''}
                                    onChange={(e) => setEditingItem({ ...editingItem, size: e.target.value })}
                                />
                                <TextField
                                    margin="dense"
                                    label="Description"
                                    type="text"
                                    fullWidth
                                    value={editingItem?.description || ''}
                                    onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })}
                                />
                                <TextField
                                    margin="dense"
                                    label="Price"
                                    type="number"
                                    fullWidth
                                    value={editingItem?.price || ''}
                                    onClick={handlePriceFieldClick} // Open the price detail popup on click
                                    InputProps={{
                                        readOnly: true,
                                    }}
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
                                    label="Image 1"
                                    type="text"
                                    fullWidth
                                    value={editingItem?.image1 || ''}
                                    onChange={(e) => setEditingItem({ ...editingItem, image1: e.target.value })}
                                />
                                <TextField
                                    margin="dense"
                                    label="Image 2"
                                    type="text"
                                    fullWidth
                                    value={editingItem?.image2 || ''}
                                    onChange={(e) => setEditingItem({ ...editingItem, image2: e.target.value })}
                                />
                                <TextField
                                    margin="dense"
                                    label="Image 3"
                                    type="text"
                                    fullWidth
                                    value={editingItem?.image3 || ''}
                                    onChange={(e) => setEditingItem({ ...editingItem, image3: e.target.value })}
                                />
                            </>
                        )}
                        {tabIndex === 1 && (
                            <>
                                <TextField
                                    margin="dense"
                                    label="Name"
                                    type="text"
                                    fullWidth
                                    value={editingItem?.productName || ''}
                                    onChange={(e) => setEditingItem({ ...editingItem, productName: e.target.value })}
                                />
                                <TextField
                                    margin="dense"
                                    label="Description"
                                    type="text"
                                    fullWidth
                                    value={editingItem?.description || ''}
                                    onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })}
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
                                    label="Carat Weight"
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
                                    label="Length Width Ratio"
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
                                    onClick={handlePriceFieldClick} // Open the price detail popup on click
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                                <TextField
                                    margin="dense"
                                    label="Image 1"
                                    type="text"
                                    fullWidth
                                    value={editingItem?.image1 || ''}
                                    onChange={(e) => setEditingItem({ ...editingItem, image1: e.target.value })}
                                />
                                <TextField
                                    margin="dense"
                                    label="Image 2"
                                    type="text"
                                    fullWidth
                                    value={editingItem?.image2 || ''}
                                    onChange={(e) => setEditingItem({ ...editingItem, image2: e.target.value })}
                                />
                                <TextField
                                    margin="dense"
                                    label="Image 3"
                                    type="text"
                                    fullWidth
                                    value={editingItem?.image3 || ''}
                                    onChange={(e) => setEditingItem({ ...editingItem, image3: e.target.value })}
                                />
                            </>
                        )}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={handleFinalSave} color="primary">
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>

                {/* Price Detail Popup */}
                <Dialog open={openPriceDetail} onClose={handleClose}>
                    <DialogTitle>{'Enter Price Details'}</DialogTitle>
                    <DialogContent>
                        <TextField
                            margin="dense"
                            label="Diamond Price"
                            type="number"
                            fullWidth
                            name="diamondprice"
                            value={priceDetails.diamondprice}
                            onChange={handlePriceDetailChange}
                        />
                        <TextField
                            margin="dense"
                            label="Jewelry Price"
                            type="number"
                            fullWidth
                            name="jewelryprice"
                            value={priceDetails.jewelryprice}
                            onChange={handlePriceDetailChange}
                        />
                        <TextField
                            margin="dense"
                            label="Processing Price"
                            type="number"
                            fullWidth
                            name="processingprice"
                            value={priceDetails.processingprice}
                            onChange={handlePriceDetailChange}
                        />
                        <TextField
                            margin="dense"
                            label="Profit Ratio(%)"
                            type="number"
                            fullWidth
                            name="profit"
                            value={priceDetails.profit}
                            onChange={handlePriceDetailChange}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={handlePriceDetailSave} color="primary">
                            Save Price Detail
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
};

export default ProductManage;
