import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import ProductList from './ProductList';
import ProductForm from './ProductForm';

function App() {
    return (
        <div className="App">
            <AppBar position="static" color="default" elevation={2}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Склад товаров
                    </Typography>
                    <Button color="primary" component={Link} to="/">
                        Список товаров
                    </Button>
                    <Button color="primary" component={Link} to="/add">
                        Добавить товар
                    </Button>
                </Toolbar>
            </AppBar>
            <main style={{ padding: '2rem' }}>
                <Routes>
                    <Route path="/" element={<ProductList />} />
                    <Route path="/add" element={<ProductForm />} />
                    <Route path="/edit/:id" element={<ProductForm />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;