import classes from './Input.module.css';



interface InputProps {
    label: string,
    input: {
        id: string,
        type: string,
        min: string,
        max: string,
        step: string,
        defaultValue: string,
    }

}
const Input: React.FC<InputProps> = ({input}) => {


    return (
            <>
            <div className={classes.input}>
                <label htmlFor={input.id}></label>
                <input {...input} />
            </div>
            </>
        )
}

export default Input