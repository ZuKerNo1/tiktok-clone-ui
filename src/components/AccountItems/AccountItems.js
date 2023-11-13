import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AccountItems.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountItems({ account }) {
    return (
        <Link to={`/@${account.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={account.avatar} alt={account.full_name} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{account.full_name}</span>
                    {account.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />}
                </h4>
                <span className={cx('username')}>{account.nickname}</span>
            </div>
        </Link>
    );
}

AccountItems.propTypes = {
    account: PropTypes.number.isRequired,
};

export default AccountItems;
