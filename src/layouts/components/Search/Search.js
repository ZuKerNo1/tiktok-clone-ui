import { useState, useEffect, useRef } from "react";
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeadlessTippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from './Search.module.scss'

import * as searchServices from '~/services/searchService';
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItems from "~/components/AccountItems";
import { SearchIcon } from "~/components/Icons";
import { useDebounce } from "~/hooks";

const cx = classNames.bind(styles)

function Search() {
    const [searchResult, setSearchResult] = useState([1])
    const [searchValue, setSearchValue] = useState('')
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)

    const debounced = useDebounce(searchValue, 800)

    const inputRef = useRef()

    useEffect(() => {
        if (!debounced) {
            setSearchResult([])
            return;
        }

        const fetchApi = async () => {
            setLoading(true);

            const result = await searchServices.search(debounced);

            setSearchResult(result);
            setLoading(false);
        };
        fetchApi();

    }, [debounced])

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([])
        inputRef.current.focus();
    }

    const handleShowResult = () => {
        setShowResult(false)
    }
    return (
        <div>
            <HeadlessTippy
                offset={[0]}
                interactive
                visible={showResult && searchResult.length > 0}
                render={attrs => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Tài khoản</h4>
                            {searchResult.map((result) => (
                                <AccountItems key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleShowResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Tìm kiếm"
                        spellCheck={false}
                        onChange={e => {
                            e.target.value = e.target.value.trimStart()
                            setSearchValue(e.target.value)
                        }}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (<button
                        onClick={handleClear}
                    >
                        <FontAwesomeIcon className={cx('clear')} icon={faCircleXmark} />
                    </button>)}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <button className={cx('search-btn')} onMouseDown={e => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;