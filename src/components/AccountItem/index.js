import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://media.travelmag.vn/files/content/2021/07/02/tai-sao-nen-nuoi-meo6-14235392.jpg"
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
