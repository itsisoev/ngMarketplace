export interface IIconLinks {
  href: string;
  icon: string;
}

export const SOCIAL_LINKS: IIconLinks[] = [
  {href: '#', icon: 'assets/svg/x.svg'},
  {href: '#', icon: 'assets/svg/facebook.svg'},
  {href: '#', icon: 'assets/svg/pinterest.svg'},
  {href: '#', icon: 'assets/svg/reddit.svg'},
  {href: '#', icon: 'assets/svg/youtube.svg'},
  {href: '#', icon: 'assets/svg/instagram.svg'}
];

export const ACTION_LINKS: IIconLinks[] = [
  {icon: 'assets/svg/basket.svg', href: '#'},
  {icon: 'assets/svg/like.svg', href: '#'},
  {icon: 'assets/svg/profile.svg', href: '#'}
];
