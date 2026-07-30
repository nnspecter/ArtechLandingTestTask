import AeroBuds from '@shared/assets/images/ShopItems/AeroBuds.png'
import AirCharge from '@shared/assets/images/ShopItems/AirCharge.png'
import ChillMountFin from '@shared/assets/images/ShopItems/ChillMountFin.png'
import VoltSocket from '@shared/assets/images/ShopItems/VoltSocket.png'

export interface ProductSpec {
  label: string
  value: number
  unit: string
  decimals: number
}

export interface Product {
  id: string
  name: string
  image: string
  category: string
  price: string
  tagline: string
  specs: ProductSpec[]
  accent: string
}

export const products: Product[] = [
  {
    id: 'artTech-pulse',
    name: 'ArtTech Pulse',
    image: AeroBuds,
    category: 'Беспроводные наушники',
    price: '34 990 тг',
    tagline: 'Тишина, которую настраиваете вы',
    specs: [
      { label: 'Автономность', value: 38, unit: 'ч', decimals: 0 },
      { label: 'Шумоподавление', value: 32, unit: 'дБ', decimals: 0 },
      { label: 'Задержка', value: 42, unit: 'мс', decimals: 0 },
    ],
    accent: '#5ce1e6',
  },
  {
    id: 'volt-socket',
    name: 'Volt Socket S2',
    image: VoltSocket,
    category: 'Умная розетка',
    price: '12 990 тг',
    tagline: 'Управление энергией в одно касание',
    specs: [
      { label: 'Нагрузка', value: 16, unit: 'A', decimals: 0 },
      { label: 'Отклик Wi-Fi', value: 180, unit: 'мс', decimals: 0 },
      { label: 'Учёт мощности', value: 0.5, unit: 'Вт шаг', decimals: 1 },
    ],
    accent: '#d8845a',
  },
  {
    id: 'aircharge-x',
    name: 'AirCharge X4',
    image: AirCharge,
    category: 'Автомобильный компрессор',
    price: '34 990 тг',
    tagline: 'От нуля до полного давления за минуты',
    specs: [
      { label: 'Давление', value: 10.3, unit: 'бар', decimals: 1 },
      { label: 'Накачка колеса', value: 4, unit: 'мин', decimals: 0 },
      { label: 'Уровень шума', value: 68, unit: 'дБ', decimals: 0 },
    ],
    accent: '#5ce1e6',
  },
  {
    id: 'artTech-coolMax',
    name: 'ArtTech CoolMax',
    image: ChillMountFin,
    category: 'Кулер для смартфона',
    price: '9 990 тг',
    tagline: 'Держит смартфон холодным под нагрузкой',
    specs: [
      { label: 'Охлаждение', value: 16, unit: '°C', decimals: 0 },
      { label: 'Время выхода', value: 90, unit: 'сек', decimals: 0 },
      { label: 'Уровень шума', value: 24, unit: 'дБ', decimals: 0 },
    ],
    accent: '#d8845a',
  },
]
 
