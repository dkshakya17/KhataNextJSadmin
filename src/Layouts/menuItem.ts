import { MenuItemType } from '@paljs/ui/types';

const items: MenuItemType[] = [
  {
    title: 'Home Page',
    icon: { name: 'home' },
    link: { href: '/dashboard' },
  },
  {
    title: 'Partners',
    icon: { name: 'star-outline' },
    link: { href: '/partners' },
  }
];

export default items;
