const translations = {};

// Carrega o arquivo JSON de um idioma
async function loadLanguage(lang) {
    try {        
        const response = await fetch(`/i18n/${lang}.json`);
        const data = await response.json();
        translations[lang] = data;
        return data;
    } catch (error) {
        console.error("Erro ao carregar tradução:", error)    
    }
}

// Altera o conteúdo do HTML com base no idioma
async function setLanguage(lang) {
    const languageData = await loadLanguage(lang);
}