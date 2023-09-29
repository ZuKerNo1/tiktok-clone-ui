import PropTypes from 'prop-types'
import classNames from "classnames/bind";
import styles from "./Button.module.scss"
import { Link } from "react-router-dom";

const cx = classNames.bind(styles)

function Button({
    children,
    className,
    primary = false,
    text = false,
    outline = false,
    small = false,
    large = false,
    disabled = false,
    leftIcon,
    rightIcon,
    to,
    href,
    onClick,
    ...passProps
}) {
    let Comp = 'button'

    const props = {
        onClick,
        ...passProps
    }

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof (props[key]) === 'function') {
                delete props[key]
            }
        })
    }

    if (to) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = 'a'
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        text,
        small,
        large,
        disabled
    })
    return <Comp className={classes} {...props}>
        {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
        <span className={cx('title')}>{children}</span>
        {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    primary: PropTypes.bool,
    text: PropTypes.bool,
    outline: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    disabled: PropTypes.bool,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    to: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button;