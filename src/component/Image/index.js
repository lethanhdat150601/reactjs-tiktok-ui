import classNames from 'classnames';
import { useState, forwardRef } from 'react';
import images from '~/assets/image';
import styles from './Image.module.scss';

function Image({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) {
    const [imgSrc, setImgSrc] = useState(src);

    const handleError = () => {
        // Chỉ cập nhật src sang fallback nếu nó chưa phải là fallback
        if (imgSrc !== customFallback) {
            setImgSrc(customFallback);
        }
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            {...props}
            src={imgSrc}
            alt={alt}
            ref={ref}
            onError={handleError}
        />
    );
}

export default forwardRef(Image);
