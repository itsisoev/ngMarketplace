import {ChangeDetectionStrategy, Component, effect, inject, signal} from '@angular/core';
import {RouterLink} from '@angular/router';
import {ACTION_LINKS, IIconLinks, SOCIAL_LINKS} from './header.constants';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';

interface ILanguages {
  code: string;
  name: string;
}

@Component({
  selector: 'layout-header',
  imports: [
    RouterLink,
    TranslatePipe
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Header {
  private translate = inject(TranslateService);

  linksSocial = signal<IIconLinks[]>(SOCIAL_LINKS);
  links = signal<IIconLinks[]>(ACTION_LINKS);
  storeName = signal<string>('Пайкар')

  languages = signal<ILanguages[]>([
    { code: 'en', name: 'En' },
    { code: 'ru', name: 'Ru' },
    { code: 'tj', name: 'Tj' }
  ])

  currentLang = signal<string>(this.getSavedLang());

  constructor() {
    effect(() => {
      const lang = this.currentLang();
      this.translate.use(lang);
      localStorage.setItem('language', lang);
    });
    this.translate.use(this.currentLang());
  }

  private getSavedLang(): string {
    return localStorage.getItem('language') ||
      this.translate.getBrowserLang() ||
      'en';
  }

  changeLanguage(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.currentLang.set(select.value);
  }
}
