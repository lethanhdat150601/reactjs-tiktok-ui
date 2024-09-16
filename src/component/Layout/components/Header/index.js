import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/';
import 'tippy.js/dist/tippy.css';
import {
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faHouse,
    faMoon,
    faQuestion,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

import Button from '~/component/Button';
import styles from './Header.module.scss';
import images from '~/assets/image';
import Menu from '~/component/Popper/Menu';
import { UploadIcon } from '~/component/Icons';
import Image from '~/component/Image';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faHouse} />,
        title: 'Create tools',
    },
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faQuestion} />,
        title: 'Feedback end help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Dark mode',
    },
];
function Header() {
    const currentUser = true;

    //handlelogic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //handle language
                break;
            default:
        }
    };
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="logo" />
                </div>
                <Search />
                <div className={cx('acctions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload" placement="bottom">
                                <button className={cx('acction-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('current-avatar')}
                                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-euttp/7313012852510425121~c5_720x720.jpeg?lk3s=a5d48078&nonce=42558&refresh_token=49b29d0819855c61c300ed461b5037fc&x-expires=1726275600&x-signature=nUUzBp1JuLKQMGEtLcut7f0kAdM%3D&shp=a5d48078&shcp=81f88b70"
                                alt="Nguyen Van A"
                                fallback="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/3d913369e3ab6511c11028ac27941c53~c5_100x100.jpeg?lk3s=a5d48078&nonce=38243&refresh_token=087e91128c18b014a8786a9b0a26d1a3&x-expires=1726300800&x-signature=mj6AJkm8hAAgJulmot9pmQ%2BhWQ4%3D&shp=a5d48078&shcp=81f88b70"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
