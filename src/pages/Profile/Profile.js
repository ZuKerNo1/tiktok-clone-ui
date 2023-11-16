import classNames from 'classnames/bind';

import styles from './Profile.module.scss';
import Header from '~/components/Profile/Header';
import VideosAccount from '~/components/Profile/VideosAccount';

const cx = classNames.bind(styles);

function Profile() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <Header />
                <VideosAccount />
            </div>
        </div>
    );
}

export default Profile;
