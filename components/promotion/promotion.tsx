import Image from 'next/image';

import classes from './promotion.module.css';

const Promotion = () => {

    const imagePath = '/images/promotions/salad.jpg';

    return (
        <div className={classes.promotion}>
            <div className={classes.info}>
                <div className={classes.board}>The board</div>
                <p>We close the 14 of July at 19:00</p>
                <h2>You have two days left</h2>
                <button>Make the purchase</button>
            </div>
            <Image src={imagePath} 
                width={320}
                height={320}
            />
        </div>
    )
}

export default Promotion;