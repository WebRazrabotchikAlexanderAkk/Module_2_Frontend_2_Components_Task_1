import { useState } from 'react';
import styles from './App.module.css';

function App() {
	const [isDisabled, setIsDisabled] = useState(true);
	const [inputValue, setInputValue] = useState('');
	const [error, setError] = useState(true);
	const [list, setList] = useState([]);
	const onInputButtonClick = () => {
		const promptValue = prompt('Введите значение') || '';
		const isValid = promptValue.length >= 3;
		setError(isValid);
		setInputValue(isValid ? promptValue : '');
		setIsDisabled(!isValid);
	};
	const addToList = () => {
		const elementList = (
			<li key={Date.now()} className={styles['list-item']}>
				{inputValue}
			</li>
		);
		setList([...list, elementList]);
		setInputValue('');
		setIsDisabled(true);
	};

	return (
		<>
			<div className={styles.app}>
				<h1 className={styles['page-heading']}>Ввод значения</h1>
				<p className={styles['no-margin-text']}>
					Текущее значение <code>value</code>: "
					<output className={styles['current-value']}>{inputValue}</output>"
				</p>
				{!error && (
					<div className={styles.error}>
						Введенное значение должно содержать минимум 3 символа
					</div>
				)}
				<div className={styles['buttons-container']}>
					<button className={styles.button} onClick={onInputButtonClick}>
						Ввести новое
					</button>
					<button
						className={styles.button}
						disabled={isDisabled}
						onClick={addToList}
					>
						Добавить в список
					</button>
				</div>
				<div className={styles['list-container']}>
					<h2 className={styles['list-heading']}>Список:</h2>
					{list.length < 1 && (
						<p className={styles['no-margin-text']}>
							Нет добавленных элементов
						</p>
					)}
					{/* <ul className={styles.list}>{list}</ul> */}
					<ul className={styles.list}>{list.map((el) => el)}</ul>
				</div>
			</div>
		</>
	);
}

export default App;
