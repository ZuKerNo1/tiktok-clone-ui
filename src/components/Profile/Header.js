import classNames from 'classnames/bind';

import styles from './Profile.module.scss';
import Image from '../Image';
import Button from '../Button';
import { FollowedIcon, LinkIcon, MoreIcon, ShareIcon } from '../Icons';

const cx = classNames.bind(styles);

const Header = () => {
    return (
        <div className={cx('wrapper-header')}>
            <div className={cx('info-account')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/f808b33fe096712c0a714532765940a1.jpeg?x-expires=1700233200&x-signature=ShqJ%2Fl99L0kmLhX6zhgLCT0RPDo%3D"
                    alt=""
                />
                <div className={cx('title')}>
                    <h1 className={cx('user-title')}>tvbtraam</h1>
                    <h2 className={cx('user-subtitle')}>Martha✨🦋</h2>
                    <div className={cx('follow-container')}>
                        <div className={cx('btn-follow-wrapper')}>
                            {/* chưa follow */}
                            {/* <Button className={cx('btn-follow')} primary>
                                Follow
                            </Button> */}
                            {/* Đã follow */}
                            <Button className={cx('btn-follow')} outline>
                                Messages
                            </Button>
                            <div className={cx('followed-icon')}>
                                <FollowedIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('count-info')}>
                <div className={cx('div-num')}>
                    <strong>100</strong>
                    <span className={cx('span-unit')}>Following</span>
                </div>
                <div className={cx('div-num')}>
                    <strong>100</strong>
                    <span className={cx('span-unit')}>Followers</span>
                </div>
                <div className={cx('div-num')}>
                    <strong>100</strong>
                    <span className={cx('span-unit')}>Likes</span>
                </div>
            </div>
            <h2 className={cx('description')}>Trương Võ Bảo Trâm✨🦋</h2>
            <div className={cx('link')}>
                <LinkIcon width="18px" height="18px" />
                <a href="#">instabio.cc/Hiiitrammm</a>
            </div>
            <div className={cx('btn-container')}>
                <ShareIcon width="24px" height="24px" />
                <MoreIcon width="24px" height="24px" />
            </div>
        </div>
    );
};

export default Header;
