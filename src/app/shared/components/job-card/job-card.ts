import { NgClass, UpperCasePipe } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UiButton } from '../ui-button/ui-button';

export interface Job {
  id: number;
  title: string;
  department: string;
  status: 'active' | 'draft' | 'closed';
  applicants: number;
}

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [NgClass, UpperCasePipe, UiButton],
  templateUrl: './job-card.html',
  styleUrl: './job-card.css',
})
export class JobCard {
  @Input() job!: Job; 

  @Output() viewDetails = new EventEmitter<number>();
}
