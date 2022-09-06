import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/ddcb57a7bcd8bf0fc01c18338b2caf59~c5_300x300.webp?x-expires=1660381200&x-signature=KxcCToF8efUuDmTSdOV48JrRsdo%3D"
                className={cx('avatar')}
                alt="a"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    daolephuonghoa
                    <span>
                        <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                    </span>
                </h4>
                <span className={cx('username')}>Dao Le Phuong Hoa</span>
            </div>
        </div>
    );
}

export default AccountItem;
