import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Home as HomeIcon, ErrorOutline as ErrorIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function Error404Page() {
    const navigate = useNavigate();

    // Función para manejar el clic en el botón
    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100vh"
            textAlign="center"
        >
            <ErrorIcon color="error" style={{ fontSize: 80 }} />
            <Typography variant="h2" color="error" gutterBottom>
                Error 404
            </Typography>
            <Typography variant="h5" color="textSecondary">
                Página no encontrada
            </Typography>
            <Button
                variant="contained"
                color="primary"
                startIcon={<HomeIcon />}
                onClick={handleGoHome}
                style={{ marginTop: 20 }}
            >
                Volver a Inicio
            </Button>
        </Box>
    );
}

export default Error404Page;
