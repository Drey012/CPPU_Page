import { useMemo } from 'react';
import styles from '../styles/artigo.module.css';

const SanitizedContent = ({ content, className = '' }) => {
  const processedContent = useMemo(() => {
    if (!content) return '';

    let processed = content;

    // 1. Função para detectar se um elemento tem conteúdo visível (CORRIGIDA)
    const hasVisibleContent = (html) => {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;

      // Remove elementos que não contribuem visualmente (CORRIGIDO)
      const nonVisibleElements = tempDiv.querySelectorAll('br, span:empty, a:not([href])');
      nonVisibleElements.forEach(el => el.remove());

      // Remove tags o:p manualmente (não pode ser selecionada via querySelector)
      const opElements = tempDiv.getElementsByTagName('o:p');
      while (opElements.length > 0) {
        opElements[0].remove();
      }

      // Verifica se sobrou texto visível ou elementos úteis
      const textContent = tempDiv.textContent || '';
      const hasUsefulElements = tempDiv.querySelectorAll('img, iframe, video, table, ul, ol').length > 0;

      return textContent.trim().length > 0 || hasUsefulElements;
    };

    // 2. Primeiro: remover os casos específicos que identificamos
    processed = processed
      // Remove <p>&nbsp;<span></span></p> (seu novo caso)
      .replace(/<p[^>]*>\s*&nbsp;\s*<span[^>]*><\/span>\s*<\/p>/gi, '')

      // Remove <p></p> vazios
      .replace(/<p[^>]*>\s*<\/p>/gi, '')

      // Remove <p>&nbsp;</p> 
      .replace(/<p[^>]*>\s*&nbsp;\s*<\/p>/gi, '')

      // Remove <p><span></span></p>
      .replace(/<p[^>]*>\s*<span[^>]*><\/span>\s*<\/p>/gi, '')
  
      // Remove parágrafos com &nbsp; aninhados (seu primeiro caso)
      .replace(/<p[^>]*class="MsoNormal"[^>]*>\s*<span[^>]*>\s*<span[^>]*>&nbsp;<\/span>\s*<span[^>]*><o:p><\/o:p><\/span>\s*<\/span>\s*<\/p>/gi, '')

      // Remove links duplicados/quebrados do Blogger (seu segundo caso)
      .replace(/<a[^>]*>(\s*<br\s*\/?>\s*)+<\/a>/gi, '')
      .replace(/(<a[^>]*href="[^"]*"\s*><img[^>]*><\/a>)(?:\s*<a[^>]*href="[^"]*"\s*><\/a>)+/gi, '$1')
      .replace(/<a[^>]*>\s*<\/a>/gi, '')

      // Remove spans vazios ou com apenas &nbsp;
      .replace(/<span[^>]*>\s*&nbsp;\s*<\/span>/gi, '')
      .replace(/<span[^>]*>\s*<\/span>/gi, '')

      // Remove divs "separator" desnecessárias
      .replace(/<div[^>]*class="[^"]*separator[^"]*"[^>]*>\s*<a[^>]*>\s*<br\s*\/?>\s*<\/a>\s*<\/div>/gi, '')
      .replace(/<div[^>]*class="[^"]*separator[^"]*"[^>]*>\s*<br\s*\/?>\s*<\/div>/gi, '')
      .replace(/<div[^>]*class="[^"]*separator[^"]*"[^>]*>\s*<\/div>/gi, '')

      // Remove comentários e tags específicas do Office
      .replace(/<!--\[if !supportLists\]-->/gi, '')
      .replace(/<!--\[endif\]-->/gi, '')
      .replace(/<o:p><\/o:p>/gi, '');

    // 3. DEPOIS: remover parágrafos vazios genericamente (mais seguro)
    processed = processed.replace(
      /<p[^>]*>[\s\S]*?<\/p>/gi,
      (match) => {
        // Remove tags o:p antes de verificar o conteúdo
        const cleanMatch = match.replace(/<o:p><\/o:p>/gi, '');

        // Se não tem conteúdo visível após limpeza, remove
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = cleanMatch;

        const textContent = tempDiv.textContent || '';
        const hasUsefulElements = tempDiv.querySelectorAll('img, iframe, video, table, ul, ol, a[href]').length > 0;

        if (textContent.trim().length === 0 && !hasUsefulElements) {
          return '';
        }
        return match;
      }
    );

    // 4. Seu código existente para responsividade
    processed = processed
      .replace(/<table>/g, '<div class="' + styles.contentContainer + '"><table>')
      .replace(/<\/table>/g, '</table></div>')
      .replace(/width="[^"]*"/g, '')
      .replace(/height="[^"]*"/g, '')
      .replace(/style="[^"]*"/g, '')
      .replace(/<img/g, '<img loading="lazy"');

    return processed;
  }, [content]);

  return (
    <div
      className={`${styles.articleContent} ${className}`}
      dangerouslySetInnerHTML={{ __html: processedContent }}
    />
  );
};

export default SanitizedContent;