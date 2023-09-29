import classNames from "classnames/bind";
import styles from './Menu.module.scss'
import Tippy from "@tippyjs/react/headless";
import PropTypes from 'prop-types'

import { Wrapper as PopperWrapper } from "~/components/Popper";
import MenuItem from "./MenuItem";
import Header from "./Header";
import { useState } from "react";


const cx = classNames.bind(styles)
const fn = () => {

}

function Menu({ children, items = [], onChange = fn }) {

    const [history, setHistory] = useState([{ data: items }])
    const current = history[history.length - 1]

    const renderItem = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children

            return <MenuItem key={index} data={item} onClick={() => {
                if (isParent) {
                    setHistory(prev => [...prev, item.children])
                } else {
                    onChange(item)
                }
            }} />
        }
        )
    }

    return (
        <Tippy
            hideOnClick='false'
            offset={[15, 5]}
            interactive
            delay={[0, 500]}
            placement="bottom-end"
            render={attrs => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>

                    <PopperWrapper>
                        {history.length > 1 &&
                            <Header
                                title={current.title}
                                onBack={() => {
                                    setHistory(prev => prev.slice(0, prev.length - 1))
                                }}
                            />}
                        <div className={cx('menu-body')}>{renderItem()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory(prev => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    onChange: PropTypes.func
}

export default Menu;