import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faHeart, faMusic, faShare, faTag } from '@fortawesome/free-solid-svg-icons';
import { forwardRef, useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

import styles from './Video.module.scss';
import Button from '../Button';
import { MutedIcon, PauseIcon, PlayIcon, VolumeIcon } from '../Icons';
import Image from '../Image';
const cx = classNames.bind(styles);

function VideoItem({ item, volumeRender, onChangeVolume }) {
    const videoRef = useRef();

    const user = item.user;

    const [play, setPlay] = useState(false);
    const [muted, setMuted] = useState(false);

    // Xử lí chạy/tắt video
    const handlePlay = () => {
        if (!play) {
            videoRef.current.play();
            setPlay(true);
        } else {
            videoRef.current.pause();
            setPlay(false);
        }
    };

    // Thay đổi âm lượng video
    const handleVolumeChange = (event) => {
        const newVolume = event.target.value;
        if (videoRef.current) {
            videoRef.current.volume = newVolume / 100;
        }
        onChangeVolume(newVolume);
    };

    // Chạy video khi ở trong view port
    const handleScroll = () => {
        const rect = videoRef.current.getBoundingClientRect(); //Lấy thông tin kích thước phần tử
        const isVisible = rect.top < window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2; //Kiểm tra phần tử có hiển thị trên screen

        if (isVisible) {
            videoRef.current.play();
            setPlay(true);
        } else {
            videoRef.current.pause();
            setPlay(false);
        }
    };

    // const handleMuted = () => {
    //     videoRef.current.muted = !videoRef.current.muted;
    // };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        videoRef.current.volume = volumeRender / 100;
        if (videoRef.current.volume !== 0) {
            setMuted(false);
        } else {
            setMuted(true);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [volumeRender]);

    return (
        <div className={cx('wrapper')}>
            <Image className={cx('avatar')} src={user.avatar} alt={user.nickname} />
            <div className={cx('container')}>
                <div className={cx('info')}>
                    <div className={cx('auther')}>
                        <p className={cx('nickname')}>{user.nickname}</p>
                        <p className={cx('name')}>
                            {user.first_name} {user.last_name}
                        </p>
                    </div>
                    <p className={cx('description')}>{item.description}</p>
                    <div className={cx('music-tag')}>
                        <FontAwesomeIcon icon={faMusic} />
                        <p className={cx('link-music')}>nhạc nền - Kiều Boss</p>
                    </div>
                    {/* <div className={cx('anchor-tag')}>
                        <FontAwesomeIcon icon={faLocationDot} />
                        <p className={cx('name-location')}>Sầm Sơn</p>
                    </div> */}
                </div>

                <div className={cx('video-wrapper')}>
                    <div className={cx('video-card')}>
                        <video loop ref={videoRef} className={cx('video')} src={item.file_url} />

                        <div className={cx('play-icon')} onClick={handlePlay}>
                            {!play ? <PlayIcon /> : <PauseIcon />}
                        </div>
                        <div className={cx('volume-icon')}>
                            {/* Test volume */}
                            <div className={cx('volume-control')}>
                                <div className={cx('volume-bar')}>
                                    <div className={cx('volume-dot')} style={{ height: `${volumeRender}%` }}></div>
                                </div>
                                <input
                                    className={cx('volume-input')}
                                    type="range"
                                    value={volumeRender}
                                    step="1"
                                    min="0"
                                    max="100"
                                    onChange={handleVolumeChange}
                                />
                            </div>
                            {!muted ? (
                                <div>
                                    <VolumeIcon />
                                </div>
                            ) : (
                                <div>
                                    <MutedIcon />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Action Item */}
                    <div className={cx('action-item')}>
                        <div className={cx('button-action-item')}>
                            <Button rounded className={cx('button-icon')}>
                                <FontAwesomeIcon icon={faHeart} />
                            </Button>
                            <span className={cx('num-action')}>{item.likes_count}</span>
                        </div>
                        <div className={cx('button-action-item')}>
                            <Button rounded className={cx('button-icon')}>
                                <FontAwesomeIcon icon={faCommentDots} />
                            </Button>
                            <span className={cx('num-action')}>{item.comments_count}</span>
                        </div>
                        <div className={cx('button-action-item')}>
                            <Button rounded className={cx('button-icon')}>
                                <FontAwesomeIcon icon={faTag} />
                            </Button>
                            <span className={cx('num-action')}>{item.shares_count}</span>
                        </div>
                        <div className={cx('button-action-item')}>
                            <Button rounded className={cx('button-icon')}>
                                <FontAwesomeIcon icon={faShare} />
                            </Button>
                            <span className={cx('num-action')}>{item.views_count}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

VideoItem.propTypes = {
    item: PropTypes.object.isRequired,
};

export default forwardRef(VideoItem);
