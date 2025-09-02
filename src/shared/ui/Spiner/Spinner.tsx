import cls from './Spinner.module.css';

export function Spinner() {
  return (
    <div className={cls.spinnerContainer}>
      <span className={cls.spinner}></span>
    </div>
  );
}
