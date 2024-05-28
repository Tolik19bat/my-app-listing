// Определяем интерфейс MainImageInterface для объекта основного изображения
interface MainImageInterface {
    url_570xN: string; // URL основного изображения товара в размере 570xN пикселей
  }
  
  // Экспортируем интерфейс ItemInterface как основной интерфейс для товара
  export default interface ItemInterface {
    listing_id: number; // Уникальный идентификатор списка товара
    url: string; // URL страницы товара
    MainImage: MainImageInterface; // Объект основного изображения, соответствующий интерфейсу MainImageInterface
    title: string; // Заголовок товара
    currency_code: string; // Код валюты цены товара
    price: string; // Цена товара в виде строки
    quantity: number; // Количество доступных единиц товара
    state: string; // Состояние товара, например "active"
  }
  