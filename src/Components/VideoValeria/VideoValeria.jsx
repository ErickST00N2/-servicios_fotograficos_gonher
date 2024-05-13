import React from 'react';
import video from "../../assets/videos/header/ValeriaHighlight.mp4";
import PVV from "../../assets/img/header/PortadaVideoValeria.png";
import ReactPlayer from 'react-player/lazy';
import { PlayCircleFilledOutlined } from '@mui/icons-material';

function VideoValeria() {
    const videoc = video;
    const imgP = PVV;

    return (
        <div className='player-wrapper' >
            <ReactPlayer
                className='react-player'
                url={videoc}
                width='100%'
                height='100%'
                pip={true}
                stopOnUnmount={true}
                fallback={'https://fb.watch/s0WSNJ2WsB'}
                controls={true}
                playing
                playIcon={<PlayCircleFilledOutlined style={{ fontSize: '100px' }} />}
                light={imgP}
                onPlay={() => console.log('onPlay')}
                volume='0.5'
                config={{
                    file: {
                        attributes: {
                            about: '🎥 Valeria ✨ Highlight 🤩'
                        }
                    },
                    youtube: {
                        playerVars: {
                            playsinline: 1
                        }
                    },
                    facebook: {
                        appId: '457105143396729',
                        attributes: {
                            about: '🎥 Valeria ✨ Highlight 🤩'
                        },
                        playerVars: {
                            autoplay: 1
                        },
                        playerId: '457105143396729',
                        width: '100%',
                        height: '100%',
                    }
                }}
            />
        </div>
    );
}

export default VideoValeria;
