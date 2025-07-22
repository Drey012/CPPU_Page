import { useState } from 'react';
import styles from '../styles/ContactForm.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.nome.trim()) {
      newErrors.nome = 'Por favor, insira seu nome';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Por favor, insira seu e-mail';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Por favor, insira um e-mail válido';
    }
    
    if (!formData.mensagem.trim()) {
      newErrors.mensagem = 'Por favor, insira sua mensagem';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch('http://localhost/cppu-api/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          nome: '',
          email: '',
          mensagem: ''
        });
      } else {
        throw new Error('Erro no envio');
      }
    } catch (error) {
      console.error('Erro:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className={styles.contactSection}>
      <h2 className={styles.sectionTitle}>Entre em Contato</h2>
      
      <div className={styles.contactFormContainer}>
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <div className={`${styles.formGroup} ${errors.nome ? styles.hasError : ''}`}>
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              className={styles.formInput}
            />
            {errors.nome && <span className={styles.errorMessage}>{errors.nome}</span>}
          </div>
          
          <div className={`${styles.formGroup} ${errors.email ? styles.hasError : ''}`}>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.formInput}
            />
            {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
          </div>
          
          <div className={`${styles.formGroup} ${errors.mensagem ? styles.hasError : ''}`}>
            <label htmlFor="mensagem">Mensagem</label>
            <textarea
              id="mensagem"
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              className={`${styles.formInput} ${styles.formTextarea}`}
              rows="6"
            />
            {errors.mensagem && <span className={styles.errorMessage}>{errors.mensagem}</span>}
          </div>
          
          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
          </button>
          
          {submitStatus === 'success' && (
            <div className={styles.successMessage}>
              Mensagem enviada com sucesso! Entraremos em contato em breve.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className={styles.errorMessage}>
              Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;