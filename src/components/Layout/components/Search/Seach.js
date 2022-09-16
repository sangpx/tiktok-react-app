import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '../../../Icons';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect, useRef } from 'react';
import { useDebounce } from '~/Hook';
import * as searchServices from '~/apiServices/searchServices';

const cx = classNames.bind(styles);

function Search() {
    //state ket qua search
    const [searchResult, setSearchResult] = useState([]);

    //state search
    const [searchValue, setsearchValue] = useState('');

    //bulur ket qua
    const [showResult, setShowResult] = useState(true);

    //state loading
    const [loading, setLoading] = useState(false);

    //inputRef
    const inputRef = useRef();

    const debounce = useDebounce(searchValue, 500);

    //handleClear
    const handleClear = () => {
        setsearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchAPI = async () => {
            setLoading(true);
            const result = await searchServices.search(debounce);
            setSearchResult(result);
            setLoading(false);
        };

        fetchAPI();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debounce]);

    //handleHideResult
    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <HeadlessTippy
            onClickOutside={handleHideResult}
            interactive
            visible={showResult && searchResult.length > 0}
            // render ket qua tim kiem
            render={(attrs) => (
                <div tabIndex="-1" {...attrs} className={cx('search-result')}>
                    <PopperWrapper>
                        <h3 className={cx('search-title')}>Accounts</h3>
                        {searchResult.map((item) => (
                            <AccountItem key={item.id} data={item} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
        >
            <div className={cx('search')}>
                {/* su dung useRef de get ra DOM element cua input === document.getElementByID */}
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={(e) => setsearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />

                {/* khi co searchValue thi moi hien button Clear */}
                {!!searchValue && !loading && (
                    <button className={cx('clear')} onClick={handleClear}>
                        {/* Clear */}
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {/* Loading */}
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                <button className={cx('search-btn')}>
                    {/* search icon */}
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
