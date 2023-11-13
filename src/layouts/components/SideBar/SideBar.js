import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import styles from './SideBar.module.scss';
import Menu, { MenuItem } from './Menu';
import routes from '~/config/routes';
import {
    GroupUserIcon,
    GroupUserIconActive,
    HomeIcon,
    HomeIconActive,
    LIVEIcon,
    LIVEIconActive,
} from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import * as userService from '~/services/userService';
import Footer from './Footer';

const cx = classNames.bind(styles);

const INIT_PAGE = 1;
const PER_PAGE = 10;

const FooterLink = [
    {
        index: 1,
        listLink: ['About', 'Newsroom', 'Contact', 'Careers'],
    },
    {
        index: 2,
        listLink: ['TikTok for Good', 'Advertise', 'Developers', 'Transparency', 'TikTok Rewards', 'TikTok Embeds'],
    },
    {
        index: 3,
        listLink: ['Help', 'Safety', 'Terms', 'Privacy', 'Creator Portal', 'Community Guidelines'],
    },
];

function SideBar() {
    const [page, setPage] = useState(INIT_PAGE);
    const [suggestedUser, setSuggestedUser] = useState([]);

    useEffect(() => {
        userService
            .getSuggestedUser({ page, perPage: PER_PAGE })
            .then((data) => {
                setSuggestedUser((prevUser) => [...prevUser, ...data]);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [page]);

    const handleSeeMoreBtn = () => {
        setPage(page + 1);
    };

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For you" to={routes.home} icon={<HomeIcon />} activeIcon={<HomeIconActive />} />
                <MenuItem
                    title="Following"
                    to={routes.following}
                    icon={<GroupUserIcon />}
                    activeIcon={<GroupUserIconActive />}
                />
                <MenuItem title="LIVE" to={routes.live} icon={<LIVEIcon />} activeIcon={<LIVEIconActive />} />
            </Menu>

            <SuggestedAccounts label="Suggested accounts" accounts={suggestedUser} onSeeMore={handleSeeMoreBtn} />

            <Footer data={FooterLink} />
        </aside>
    );
}

export default SideBar;
