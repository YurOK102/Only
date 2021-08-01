import { rootReducer } from '../reducers/rootReducer';

const MININ_VARIANT = 'minin_variant'; // ключ основного хранилища данных

// записываем данные в localStorage
export const localStorageMiddleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);

    // основное хранилище
    localStorage.setItem(
      MININ_VARIANT,
      JSON.stringify({
        taskReducer: getState().taskReducer, // сохраняем весь редьюсер
        // ...сюда можно добавлять другие редьюсеры
      })
    );

    return result;
  };
};

// извлекаем данные из localStorage
export const reHydrateStore = () => {
  const _state = rootReducer(undefined, {});

  // накладываем состояние корзины из localStorage на основной стейт приложения
  if (localStorage.getItem(MININ_VARIANT) !== null) {
    return { ..._state, ...JSON.parse(localStorage.getItem(MININ_VARIANT)) };
  } else {
    return _state;
  }
};
