import classNames from 'classnames/bind';

import styles from './Profile.module.scss';
import { LockIcon } from '../Icons';

const cx = classNames.bind(styles);

const VideosAccount = () => {
    return (
        <div className={cx('wrapper-videos')}>
            {/* Tabs */}
            <div className={cx('video-tab')}>
                <p className={cx('tab')}>Videos</p>
                <p className={cx('tab')}>
                    <LockIcon />
                    <span>Liked</span>
                </p>
                <div className={cx('bottom-line')}></div>
            </div>
            {/* Videos */}
            <div className={cx('videos-container')}>
                <div className={cx('videos-feed')}>
                    <div className={cx('video-item')}>hehe</div>
                    <div className={cx('video-item')}>hehe</div>
                    <div className={cx('video-item')}>hehe</div>
                    <div className={cx('video-item')}>hehe</div>
                    <div className={cx('video-item')}>hehe</div>
                </div>
            </div>
        </div>
    );
};

export default VideosAccount;
