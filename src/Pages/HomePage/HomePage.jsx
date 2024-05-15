import React, { useEffect, useState } from 'react';
import HeaderLayout from '../../layouts/HeaderLayout/HeaderLayout';
import MusicBackground from '../../util/MusicBackground/MusicBackground';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';


function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
}

function HomePage() {
    const [snackbars, setSnackbars] = useState([]);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleClick = (options) => {
        setSnackbars((prev) => {
            const newSnackbars = [
                ...prev,
                {
                    key: new Date().getTime(),
                    ...options,
                },
            ];
            if (newSnackbars.length > 5) {
                newSnackbars.shift(); // Eliminar el primer Snackbar si hay más de 5
            }
            return newSnackbars;
        });
    };

    const handleClose = (key) => () => {
        setSnackbars((prev) => prev.filter((snackbar) => snackbar.key !== key));
    };

    const handlePlayPause = () => {

        if (isPlaying) {
            setIsPlaying(false);
        } else {
            setIsPlaying(true);
        }
    };

    const handleStop = () => {
        const audioElement = document.getElementById('myAudio');

        audioElement.currentTime = 0;
        setIsPlaying(false);
    };

    document.onkeydown = async (event) => {
        const audioElement = document.getElementById('myAudio');

        if (event.keyCode === 77) {
            audioElement.muted = !audioElement.muted;
        }
        if (event.keyCode === 82) {
            audioElement.currentTime = 0;
        }
        if (event.keyCode === 70) {
            audioElement.currentTime += 600;
        }
        if (event.keyCode === 83) {
            handleStop();
        }
        if (event.keyCode === 81) {

        }
        if (event.keyCode === 80 || event.keyCode === 32) {
            handlePlayPause();
        }
        if (event.keyCode === 38) {
            if (audioElement.volume < 1) {
                audioElement.volume += 0.1;
            } else {
                handleClick({
                    Transition: SlideTransition,
                    message: "El volumen ya es el máximo"
                });
            }
        } else if (event.keyCode === 40) {
            if (audioElement.volume > 0.1) {
                audioElement.volume -= 0.1;
            } else {
                handleClick({
                    Transition: SlideTransition,
                    message: "El volumen ya es el mínimo"
                });
            }
        }
    };

    useEffect(() => {
        const audioElement = document.getElementById('myAudio');

        isPlaying ? audioElement.play() : audioElement.pause();

    }, [isPlaying])


    return (
        <div className='HomePage'>

            <HeaderLayout handlePlayPause={handlePlayPause} handleStop={handleStop} />
            <audio autoPlay={isPlaying} loop id='myAudio' lazy='true'>
                <source src={MusicBackground} type="audio/mpeg" />
            </audio>
            {snackbars.map((snackbar, index) => (
                <Snackbar
                    key={snackbar.key}
                    open={true}
                    onClose={handleClose(snackbar.key)}
                    TransitionComponent={snackbar.Transition}
                    message={snackbar.message}
                    autoHideDuration={5000}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    style={{ bottom: 20 + index * 60 }} // Ajustar la posición para apilar los snackbars
                />
            ))}

        </div>
    );
}

export default HomePage;
