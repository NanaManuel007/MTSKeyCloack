
import { I18n } from "../i18n";
import { CSSProperties, MouseEvent, useState } from "react";
const LanguageSelect = ({ i18n, style }: { i18n: I18n, style?: CSSProperties }) => {
  const { currentLanguage, enabledLanguages } = i18n
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = (href?: string) => {
    if(href?.length) {
      window.location.href = href
    }
    setTimeout(() => {
      setAnchorEl(null)
    }, 0)

  }

  style = {
    ...style,
    color: '#444'
  }

  return (
    <div className="relative">
      <button 
        className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors duration-200"
        onClick={handleClick}
        aria-haspopup="true"
        style={style}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4.027 7.232A9.97 9.97 0 0110 5c2.141 0 4.116.69 5.725 1.86.137.098.324.074.445-.037l.045-.045a.321.321 0 00-.034-.457A11.959 11.959 0 0010 3c-2.591 0-4.99.827-6.947 2.232a.321.321 0 00-.034.457l.045.045c.121.111.308.135.445.037A9.97 9.97 0 0110 7a9.97 9.97 0 016.973 2.232c.137.098.324.074.445-.037l.045-.045a.321.321 0 00-.034-.457A11.959 11.959 0 0010 5c-2.591 0-4.99.827-6.947 2.232a.321.321 0 00-.034.457l.045.045c.121.111.308.135.445.037zM10 9a9.97 9.97 0 00-6.973 2.232.321.321 0 01-.445.037l-.045-.045a.321.321 0 01.034-.457A11.959 11.959 0 0110 7c2.591 0 4.99.827 6.947 2.232a.321.321 0 01.034.457l-.045.045a.321.321 0 01-.445-.037A9.97 9.97 0 0010 9z" clipRule="evenodd" />
        </svg>
        <span>{currentLanguage.label}</span>
      </button>

      {open && (
        <div 
          className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="language-menu"
        >
          {enabledLanguages.map(({ href, label, languageTag }) => (
            <a
              key={languageTag}
              href={href}
              className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
                languageTag === currentLanguage.languageTag ? 'bg-gray-50' : ''
              }`}
              role="menuitem"
              onClick={(e) => {
                e.preventDefault();
                handleClose(href);
              }}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

export { LanguageSelect }