import Link from 'next/link';
import styles from '../styles/Button.module.css';

const Button = ({ 
  href, 
  children, 
  variant = 'primary', 
  onClick, 
  type = 'button',
  className = ''
}) => {
  // Classes baseadas na variante (primary ou accent)
  const variantClass = variant === 'accent' ? styles.accent : styles.primary;
  
  // Se tiver um href, renderiza como Link, senão como button
  if (href) {
    return (
      <Link href={href} className={`${styles.button} ${variantClass} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button 
      type={type}
      className={`${styles.button} ${variantClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;