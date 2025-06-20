import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  storeName = signal<string>('Пайкар');
  storePhone = signal<string>('(629) 555-0129');
  storeAddress = signal<string>('4517 Washington Ave. Manchester, Kentucky 39495');
  storeEmail = signal<string>('info@kinbo.com');
}
