import PropTypes from 'prop-types';

import VideoItem from './VideoItem';
import { useState } from 'react';

function Video({ videos = [] }) {
    const [volumeRender, setVolumeRender] = useState(50);

    const onChangeVolume = (vu) => {
        setVolumeRender(vu);
    };
    return (
        <>
            {videos.map((video, index) => (
                <VideoItem key={index} item={video} volumeRender={volumeRender} onChangeVolume={onChangeVolume} />
            ))}
        </>
    );
}

Video.propTypes = {
    videos: PropTypes.array.isRequired,
};

export default Video;
