import PropTypes from 'prop-types'

import VideoItem from "./VideoItem";

function Video({ videos = [] }) {

    return (
        videos.map((video, index) => (
            <VideoItem
                key={index}
                item={video}
            />
        ))

    );
}

Video.propTypes = {
    videos: PropTypes.object.isRequired
}

export default Video;