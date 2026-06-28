import { NgClass } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'draft' | 'success' | 'warning';
export type ButtonHtmlType = 'button' | 'submit' | 'reset';
export type ButtonSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'app-ui-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './ui-button.html',
  styleUrl: './ui-button.css',
})
export class UiButton {
  @Input() text: string = 'Click'; 
  @Input() variant: ButtonVariant = 'primary'; 
  @Input() type: ButtonHtmlType = 'button'; 
  @Input() disabled: boolean = false; 
  @Input() fullWidth: boolean = false;
  @Input() size: ButtonSize = 'medium';

  @Output() btnClick = new EventEmitter<MouseEvent>(); 

  onClick(event: MouseEvent) {
    if (!this.disabled) {
      this.btnClick.emit(event);
    }
  }
}
