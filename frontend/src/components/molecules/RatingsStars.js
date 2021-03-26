import { ReactComponent as StarEmptyIcon } from '../../assets/icons/star-empty.svg';
import { ReactComponent as StarHalfIcon } from '../../assets/icons/star-half.svg';
import { ReactComponent as StarFullIcon } from '../../assets/icons/star-full.svg';

const RatingsStars = ({
    prefix,
    reviews
}) => {
    let stars = [];
    const fullStars = reviews.averageRating.toFixed(1).charAt(0);
    const decimal = reviews.averageRating.toFixed(1).charAt(2);

    // Add full stars to array
    for (let i = 0; i < fullStars; i++) {
        stars.push('full');
    }

    // Add half star based on decimal value
    if (decimal >= 0 && decimal < 3) {
        stars.push('empty');
    } else if (decimal >= 3 && decimal <= 7) {
        stars.push('half');
    } else if (decimal > 7 && decimal <= 9) {
        stars.push('full');
    }

    // Fill in array with empty stars
    for (let i = stars.length; i < 5; i++) {
        stars.push('empty');
    }

    return (
        <div className={`${prefix}__ratings`}>
            <div className={`${prefix}__ratings-stars`} title={`${reviews.averageRating} out of 5`}>
                {stars.map((star, index) => {
                    if (star === 'full') {
                        return <StarFullIcon key={index} />
                    } else if (star === 'half') {
                        return <StarHalfIcon key={index} />
                    } else {
                        return <StarEmptyIcon  key={index} />
                    }
                })}
            </div>
            <span className={`${prefix}__ratings-reviews`}>{reviews.totalReviews} Reviews</span>
        </div>
    )
}

export default RatingsStars;
