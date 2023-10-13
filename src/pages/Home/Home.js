import classNames from "classnames/bind";
import { useEffect, useState } from "react";

import styles from './Home.module.scss'
import Video from "~/components/Videos/Video";
import * as videoService from '~/services/videoService'

const cx = classNames.bind(styles);


function Home() {

    const [video, setVideo] = useState([])

    useEffect(() => {
        videoService.getVideoList()
            .then(data => {
                setVideo(prevVideo => [...prevVideo, ...data])
            }).catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <div className={cx('wrapper')}>
            <Video videos={video} />
        </div>
    )
}

export default Home