import React, { useState } from 'react';
import Dropzone from 'react-dropzone';

const DropZoneImg = () => {
    const [image, setImage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const handleImageChange = (acceptedFiles) => {
        // Resetea cualquier mensaje de error anterior
        setErrorMessage(null);

        const file = acceptedFiles[0];

        if (file) {
            // Verifica el tamaño del archivo
            const maxSizeInBytes = 4 * 1024 * 1024 * 1024 * 1024; // 2 MB
            if (file.size > maxSizeInBytes) {
                setErrorMessage('El archivo es demasiado grande. El tamaño máximo es de 2 MB.');
                return;
            }

            // Verifica el tipo de archivo
            if (file.type !== 'image/png') {
                setErrorMessage('Solo se aceptan imágenes PNG.');
                return;
            }

            // Verifica las dimensiones de la imagen
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = new Image();
                img.onload = () => {
                    const { width, height } = img;
                    if (width !== 200 || height !== 200) {
                        setErrorMessage('La imagen debe tener dimensiones de 200px por 200px.');
                        return;
                    }
                    // Si pasa todas las validaciones, guarda la imagen en el estado
                    setImage(file);
                };
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <Dropzone
                onDrop={handleImageChange}
                //accept="image/png"
                maxFiles={1}
                multiple={false}
                className="dropzone"
            >
                {({ getRootProps, getInputProps }) => (
                    <div
                        {...getRootProps()}
                        style={{
                            border: '2px dashed #ccc',
                            padding: '10px',
                            textAlign: 'center',
                            cursor: 'pointer',
                        }}
                    >
                        <input {...getInputProps()} />
                        {image ? (
                            <p>Imagen seleccionada: {image.name}</p>
                        ) : (
                            <p>Arrastra y suelta una imagen aquí o haz clic para seleccionar una imagen png sin fondo</p>
                        )}
                    </div>
                )}
            </Dropzone>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
    );
};

export default DropZoneImg;
