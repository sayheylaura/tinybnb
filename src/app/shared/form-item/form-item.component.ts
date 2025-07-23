import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-item-component',
  imports: [ReactiveFormsModule],
  templateUrl: './form-item.component.html',
  styleUrl: './form-item.component.scss',
})
export class FormItemComponent {
  @Input() id!: string;
  @Input() type!: string;
  @Input() label!: string;
  @Input() control!: FormControl<string | null>;
}
