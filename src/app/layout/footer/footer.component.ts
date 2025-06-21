import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

interface ILanguages {
  code: string;
  name: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  storeName = signal<string>('Пайкар');
  storePhone = signal<string>('(629) 555-0129');
  storeAddress = signal<string>('4517 Washington Ave. Manchester, Kentucky 39495');
  storeEmail = signal<string>('info@kinbo.com');
    private translate = inject(TranslateService);

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
