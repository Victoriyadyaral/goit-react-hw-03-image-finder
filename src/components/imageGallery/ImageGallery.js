import PropTypes from 'prop-types';

import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem';

import s from './ImageGallery.module.css';

function ImageGallery({ images }) {
    return (
            <div className={s.wrap}>
            <ul className={s.gallery}>
                {images.map((image) => (
                    <ImageGalleryItem
                        key={image.id}
                        tags={image.tags}
                        views={image.views}
                        likes={image.likes}
                        comments={image.comments}
                        webformatURL={image.webformatURL}
                        largeImageURL={image.largeImageURL}
                    />
                ))}
            </ul>
            </div>
        );
}

ImageGallery.propTypes = {
    images: PropTypes.array,
}

export default ImageGallery;