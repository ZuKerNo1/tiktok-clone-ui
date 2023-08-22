import classNames from "classnames/bind";
import styles from './AccountItems.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)
function AccountItems() {
    return (

        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://gaigoidemalo.com/wp-content/uploads/2023/07/tran-minh-thien-di-lo-clip-3.jpg" alt="Vũ" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Trần Kim Vũ</span>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                </h4>
                <span className={cx('username')}>zuker</span>
            </div>
        </div>
    )
}

export default AccountItems;