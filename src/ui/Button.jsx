import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const base =
    'text-sm font-semibold tracking-wide uppercase duration-300 bg-yellow-400 rounded-full transition-color focus-ring-yellow-300 text-stone-800 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed';

  const styles = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4',
    small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
    round: base + 'px-1 py-1 w-7 md:px-3.5 md:py-2.5 md:w-10 text-sm',
    secondary:
      'font-semibold text-sm tracking-wide uppercase  px-4 py-2.5 md:px-6 md:py-3.5 border-2 border-stone-300 duration-300 bg-transparent rounded-full transition-color focus-ring-yellow-300 text-stone-800 hover:bg-stone-300 hover:text-stone-800 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
