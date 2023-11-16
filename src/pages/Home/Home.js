import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import styles from './Home.module.scss';
import Video from '~/components/Videos/Video';
import * as videoService from '~/services/videoService';

const cx = classNames.bind(styles);

const INIT_TYPE = 'for-you';

function Home() {
    const [video, setVideo] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        videoService
            .getVideoList(INIT_TYPE, page)
            .then((data) => {
                setVideo((prevVideo) => [...prevVideo, ...data]);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [page]);

    const handleScroll = (pageIndex) => {
        setPage(pageIndex);
    };

    return (
        <div className={cx('wrapper')}>
            <Video videos={video} addPageScroll={handleScroll} page={page} />
        </div>
    );
}

export default Home;
