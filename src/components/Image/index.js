import { forwardRef, useState } from 'react';
import images from '../../Assets/images';
import styles from './Image.module.scss';
import classNames from 'classnames';

const Image = forwardRef(({ className, src, alt, ...props }, ref) => {
    const [fallBack, setFallBack] = useState('');

    const handleErrorImage = () => {
        setFallBack(images);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallBack || src}
            alt={alt}
            {...props}
            onError={handleErrorImage}
        />
    );
});

export default Image;
