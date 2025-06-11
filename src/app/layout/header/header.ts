import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {RouterLink} from '@angular/router';

interface IIconLinks {
  href: string;
  icon: string;
}

@Component({
  selector: 'layout-header',
  imports: [
    RouterLink
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Header {
  linksSocial = signal<IIconLinks[]>([
    {
      href: '#',
      icon: 'assets/svg/x.svg',
    },
    {
      href: '#',
      icon: 'assets/svg/facebook.svg',
    },
    {
      href: '#',
      icon: 'assets/svg/pinterest.svg',
    },
    {
      href: '#',
      icon: 'assets/svg/reddit.svg',
    },
    {
      href: '#',
      icon: 'assets/svg/youtube.svg',
    },
    {
      href: '#',
      icon: 'assets/svg/instagram.svg',
    }
  ])
  links =  signal<IIconLinks[]>([
    {
      icon:'assets/svg/basket.svg',
      href: '#'
    },
    {
      icon:'assets/svg/like.svg',
      href: '#'
    },
    {
      icon:'assets/svg/profile.svg',
      href: '#'
    }
  ])
}
