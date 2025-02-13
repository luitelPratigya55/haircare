
const Input = ({label,...props}) => {
    return (
        <div>
            <label htmlFor='props.id'>{label}</label>
            <input {...props} className='border-2 border-purple-500'></input>
        </div>
    )
}

export default Input
//toggle banauna baanki xala