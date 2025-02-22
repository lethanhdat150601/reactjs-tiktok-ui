import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header({ title, onBack }) {
    return (
        <header className={cx('header')}>
            <button className={cx('header-btn')}>{<FontAwesomeIcon icon={faChevronLeft} onClick={onBack} />}</button>
            <h4 className={cx('header-title')}>{title}</h4>
        </header>
    );
}

export default Header;
