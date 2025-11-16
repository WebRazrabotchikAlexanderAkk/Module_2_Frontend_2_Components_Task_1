import { useState } from 'react';
import styles from './App.module.css';

function App() {
	const [inputValue, setInputValue] = useState('');
	const [error, setError] = useState('');
	const [list, setList] = useState([]);
	const onInputButtonClick = () => {
		const promptValue = prompt('Введите значение');
		if (promptValue === null) return;
		const isValid = promptValue.length >= 3;
		setError(isValid ? '' : 'Введенное значение должно содержать минимум 3 символа');
		setInputValue(isValid ? promptValue : '');
	};
	const addToList = () => {
		setList([...list, { id: Date.now(), value: inputValue }]);
		setInputValue('');
	};

	return (
		<>
			<div className={styles.app}>
				<h1 className={styles['page-heading']}>Ввод значения</h1>
				<p className={styles['no-margin-text']}>
					Текущее значение <code>value</code>: "
					<output className={styles['current-value']}>{inputValue}</output>"
				</p>
				{error !== '' && <div className={styles.error}>{error}</div>}
				<div className={styles['buttons-container']}>
					<button className={styles.button} onClick={onInputButtonClick}>
						Ввести новое
					</button>
					<button
						className={styles.button}
						disabled={inputValue.length < 3}
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
					<ul className={styles.list}>
						{list.map((item) => (
							<li key={item.id} className={styles['list-item']}>
								{item.value}
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
}

export default App;
