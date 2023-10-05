import classNames from "classnames/bind";

import styles from './Footer.module.scss'
import FooterLink from "./FooterLink";

const cx = classNames.bind(styles)

function Footer({ data = [] }) {
    return (
        <footer>
            <FooterLink data={data} />

            <p className={cx('copy-right')}>© 2023 TikTok</p>
        </footer>
    );
}

export default Footer;