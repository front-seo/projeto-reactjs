import styles from './select.module.css';

export default function Select({ text, name, options, handleOnChange, value }) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <select 
            name={name} 
            id={name} 
            onChange={handleOnChange} 
            value={value || ''}
            >
                <option>Selecione o valor</option>
                
                {options.map((option) => (
                    <option value={option.id} key={option.id}>{option.name} </option>
                ))}
            </select>
        </div>
    )
}