import {setDefaultLanguage, setDefaultTranslations} from 'react-multi-lang'
import en from './en.json'
import pl from './pl.json'

setDefaultTranslations({en, pl})
setDefaultLanguage(localStorage.getItem('language') ?? 'en')