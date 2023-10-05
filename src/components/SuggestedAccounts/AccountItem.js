import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

import styles from './SuggestedAccounts.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('account-item')}>
            <img className={cx('avatar')} src={data.avatar} alt={data.nickname} />
            <div className={cx('info-item')}>
                <div className={cx('user-title')}>
                    <p className={cx('nickname')}>{data.nickname}</p>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </div>
                <p className={cx('name')}>{data.first_name} {data.last_name}</p>

            </div>

        </Link>

    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired
}

export default AccountItem;