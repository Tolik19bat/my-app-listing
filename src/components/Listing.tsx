// Импортируем тип FC (FunctionComponent) из библиотеки React
import { FC } from "react"
// Импортируем компонент Item из файла "./Item"
import Item from "./Item"
// Импортируем интерфейс ItemInterface из файла "./ItemInterface"
import ItemInterface from "./ItemInterface"

// Определяем интерфейс ListingProps с одним свойством items, которое является массивом объектов типа ItemInterface
interface ListingProps {
  items: Array<ItemInterface>
}

// Определяем компонент Listing, который принимает props типа ListingProps
// Значение по умолчанию для props items - пустой массив
const Listing: FC<ListingProps> = ({ items = [] }) => {

  // Возвращаем JSX элемент, который рендерит список элементов
  return (
    <div className="item-list">
      {/* Используем метод map для отображения каждого item из массива items */}
      {items.map((item) => (
        // Для каждого item рендерим компонент Item и передаем в него item как prop
        // Устанавливаем уникальный ключ key равным listing_id для оптимизации рендеринга списка
        <Item item={item} key={item.listing_id}/>
      ))}
    </div>
  )
}

// Экспортируем компонент Listing по умолчанию
export default Listing
