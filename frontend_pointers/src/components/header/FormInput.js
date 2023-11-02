import "../../styles/FormInput.css"

const FormInput = (props) => {
    const {label, onChange, id, icon,errorMessageLogin,
        errorMessageRegister,errorMessagePassword,className, ...inputProps} = props;
    return (
        <div>
        <div className={className}>
            {icon}
            <input {...inputProps} onChange={onChange}/>
        </div>
            <span>{errorMessageLogin}</span>
            <span>{errorMessagePassword}</span>
            <span className="registerErr">{errorMessageRegister}</span>
        </div>
    )
}

export default FormInput