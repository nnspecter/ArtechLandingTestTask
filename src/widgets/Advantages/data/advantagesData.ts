import type { IconType } from "react-icons";
import { BsCalendar2Check, BsClock, BsCheckCircle } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";

export type Advantage = {
  title: string;
  text: string;
  icon: IconType;
};


export const items: Advantage[] = [
  {
    icon: BsCalendar2Check,
    title: 'Протокол испытаний',
    text: 'Каждая модель проходит от 120 часов независимых тестов, прежде чем попасть на склад. Отчёты открыты для просмотра.',
  },
  {
    icon: BsClock,
    title: 'Доставка за 48 ч',
    text: 'Собственный логистический склад в трёх городах, большинство заказов отгружаются день в день.',
  },
  {
    icon: BsCheckCircle,
    title: 'Гарантия 24 месяца',
    text: 'Официальный сервисный центр и бесплатная диагностика на весь срок гарантии, без спорных случаев.',
  },
  {
    icon: CiSettings,
    title: 'Честные характеристики',
    text: 'Никаких «до 40 часов работы». Указываем измеренные значения при реальной нагрузке, не в лаборатории идеальных условий.',
  },
];