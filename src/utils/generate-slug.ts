export function generateSlug(text: string): string {
        return text
          .toLowerCase() // Converte o texto para minúsculas
          .normalize('NFD') // Normaliza os caracteres para decompor acentos
          .replace(/[\u0300-\u036f]/g, '') // Remove os acentos
          .replace(/[^\w\s]/gi, '') // Remove símbolos
          .replace(/\s+/g, '-') // Substitui espaços por hífens
          .replace(/-{2,}/g, '-') // Remove múltiplos hífens consecutivos
          .trim(); // Remove espaços em branco do início e do fim
      }