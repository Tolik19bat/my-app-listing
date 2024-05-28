// Импортируем интерфейс ItemInterface из файла "./ItemInterface"
import ItemInterface from "./ItemInterface"

// Определяем интерфейс ItemProps с одним свойством item, которое является типом ItemInterface
interface ItemProps {
  item: ItemInterface
}

// Определяем компонент Item, который принимает props типа ItemProps
const Item = ({ item }: ItemProps) => {

  // Если состояние item не "active", то компонент ничего не рендерит
  if (item.state != "active") return;

  // Определяем переменную title, которая будет содержать заголовок item
  // Если длина заголовка меньше или равна 50 символам, используем его полностью,
  // иначе обрезаем до 50 символов и добавляем "..."
  const title: string = item.title.length <= 50 ? item.title : item.title.substring(0, 50) + "..."

  // Определяем функцию renderPrice для отображения цены с учетом валюты
  const renderPrice = (currency: string, price: string) => {
    let str: string // Переменная для хранения строки цены
    // Если валюта USD, добавляем символ доллара перед ценой
    if (currency === "USD") {
      str = "$" + price
    // Если валюта EUR, добавляем символ евро перед ценой
    } else if (currency === "EUR") {
      str = "\u20AC" + price
    // Для всех остальных валют добавляем код валюты после цены
    } else {
      str = price + " " + currency
    }
    // Возвращаем JSX элемент с отформатированной ценой
    return (
      <>
        <p className="item-price">{str}</p>
      </>
    )
  }

  // Определяем переменную level, которая будет содержать класс в зависимости от количества item
  // Если количество меньше или равно 10, класс "level-low"
  // Если количество меньше или равно 20, класс "level-medium"
  // Если количество больше 20, класс "level-high"
  const level: string = item.quantity <= 10 ? "level-low" : item.quantity <= 20 ? "level-medium" : "level-high"

  // Рендерим компонент Item
  return (
    <div className="item">
      <div className="item-image">
        // Ссылка на URL item, внутри изображение из свойства MainImage
        <a href={item.url}>
          <img src={item.MainImage.url_570xN} />
        </a>
      </div>
      <div className="item-details">
        // Отображаем заголовок item
        <p className="item-title">{title}</p>
        // Вызываем функцию renderPrice для отображения цены
        {renderPrice(item.currency_code, item.price)}
        // Отображаем количество оставшихся item с соответствующим классом
        <p className={"item-quantity " + level}>{item.quantity} left</p>
      </div>
    </div>
  )
}

// Экспортируем компонент Item по умолчанию
export default Item
