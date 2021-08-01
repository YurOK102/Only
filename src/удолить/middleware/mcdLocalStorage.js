import { FETCHE_POST } from "../types";
import { rootReducer } from '../rootReducer';

const MININ_VARIANT = 'minin_variant'                 // ключ основного хранилища данных
const MININ_VARIANT_EXPIRY = 'minin_variant_expiry'   // ключ хранения слепка времени

// записываем данные в localStorage
export const localStorageMiddleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);

    // когда мы добавляем товар в корзину мы записываем в новый ключ время в которое добавили товар
    // таким образом мы смоздаем метку, с помощью которой будем потом сверять текущее время
    if (action.type === FETCHE_POST) {
      // создается ключ со временем на 10 сек
      localStorage.setItem(MININ_VARIANT_EXPIRY, Date.now() + 10000);
    };
    
    // основное хранилище
    localStorage.setItem(MININ_VARIANT, JSON.stringify({
      posts: getState().posts,      // сохраняем весь редьюсер
      // ...сюда можно добавлять другие редьюсеры
    }));

    return result;
  };
};

// извлекаем данные из localStorage
export const reHydrateStore = () => {
  const _state = rootReducer(undefined, {});
  
  // получаем слепок времени
  const staticTime = localStorage.getItem(MININ_VARIANT_EXPIRY)

  // сверяем, если текущее время больше чем слепок времени, то очищаем корзину
  if (staticTime !== null && Date.now() > staticTime ) {
    return _state
  }

  // накладываем состояние корзины из localStorage на основной стейт приложения
  if (localStorage.getItem(MININ_VARIANT) !== null) {
    return { ..._state, ...JSON.parse(localStorage.getItem(MININ_VARIANT)) }
  } else {
    return _state
  }
}