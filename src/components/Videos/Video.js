import PropTypes from 'prop-types';

import VideoItem from './VideoItem';
import { useEffect, useState } from 'react';

function Video({ videos = [], addPageScroll, page }) {
    const [volumeRender, setVolumeRender] = useState(50);

    const onChangeVolume = (volume) => {
        setVolumeRender(volume);
    };

    const handleScroll = () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.scrollY;

        const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;

        if (scrollPercentage >= 90) {
            // Khi đã kéo hết trang
            // Gọi hàm lấy danh sách video với page mới
            const newPage = page + 1;
            addPageScroll(newPage);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [page]);

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
