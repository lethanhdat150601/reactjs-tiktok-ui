import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/4cfaa5c14950b5d6fea7def263c50c7e.jpeg?lk3s=a5d48078&nonce=25023&refresh_token=eb27cc38b46254f2d2de219229f7409e&x-expires=1726045200&x-signature=fdErBa%2Bx4%2FfdyxhGUSUBFuch29k%3D&shp=a5d48078&shcp=81f88b70"
                alt="hoa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyenvana</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <p className={cx('user')}>Nguyễn Văn A</p>
            </div>
        </div>
    );
}

export default AccountItem;
