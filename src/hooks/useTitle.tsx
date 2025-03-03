import { useEffect } from 'react';
// Этот желательно бы тоже использовать
// Хук должен принимать название документа title и записывать его в document.title
// Использовать его надо на страницах(page)
// export не забываем
function useTitle() {
  useEffect(() => {
    document.title = 'My Page Title';
  }, []);
}