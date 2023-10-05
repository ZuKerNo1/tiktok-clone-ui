import classNames from "classnames/bind";

import styles from './Footer.module.scss'

const cx = classNames.bind(styles)

function FooterLink({ data }) {
    return (
        data.map((item) => (
            <div key={item.index} className={cx('wrapper')}>
                {item.listLink.map((link, index) => (
                    <p key={index} className={cx('title')}>{link}</p>
                ))}
            </div>
        ))

    );
}

export default FooterLink;