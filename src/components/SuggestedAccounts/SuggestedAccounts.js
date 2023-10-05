import classNames from "classnames/bind";
import PropTypes from 'prop-types'

import AccountItem from "./AccountItem";
import styles from './SuggestedAccounts.module.scss'

const cx = classNames.bind(styles);

function SuggestedAccounts({ label, data = [], onSeeMore }) {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('label')}>{label}</h2>

            {data.map((account) => (
                <AccountItem key={account.id} data={account} />
            ))}

            <p className={cx('more-btn')} onClick={onSeeMore}>See more</p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
    data: PropTypes.array,
    onSeeMore: PropTypes.func
}

export default SuggestedAccounts;