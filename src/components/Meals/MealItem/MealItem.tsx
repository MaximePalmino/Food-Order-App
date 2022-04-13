import classes from './MealItem.module.css';
import MealItemForm  from './MealItemForm';
// name={meal.name} description={meal.description} price={meal.price

interface MealsProps {
    name: string,
    description: string,
    price: number
}
const MealItem: React.FC<MealsProps> = ({name, description, price}) => {

    const priceFixed = `$${price.toFixed(2)}`

    return (
        <li>
            <div className={classes.meal}>
                
                <h3>{name}</h3>
                <div className={classes.description}>{description}</div>
                <div className={classes.price}>{priceFixed}</div>
            
            </div>
            <div>

                <MealItemForm />
            </div>
            <div></div>

        </li>
        )
}

export default MealItem