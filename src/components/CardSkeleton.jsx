import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const CardSkeleton = ({ cardCount }) => {
   
    return Array(cardCount)
    .fill(0)
    .map((item, i) => (
        <div key={i}>
            <div className='mb-5'>
                <Skeleton height={150} />
            </div>
            <Skeleton count={5} />
        </div>
   ));
};

export default CardSkeleton;