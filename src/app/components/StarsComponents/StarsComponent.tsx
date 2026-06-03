import {FC} from "react";
import './StarsComponent.css'

type PropsType = {
    rating:number
}
const StarsComponent:FC<PropsType> = ({rating}) => {

    const stars = Math.max(0,Math.round(rating/2))
    return (
        <div className='stars'>
            {
                [1,2,3,4,5].map(star => (
                    <span key={star} className={star <= stars ? 'active' : 'inactive'}>&#9733;</span>
                ))
            }
        </div>
    );
};

export default StarsComponent;