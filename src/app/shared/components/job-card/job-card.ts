import { NgClass, UpperCasePipe } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

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
  imports: [NgClass, UpperCasePipe],
  templateUrl: './job-card.html',
  styleUrl: './job-card.css',
})
export class JobCard {
  @Input() job!: Job; 

  @Output() viewDetails = new EventEmitter<number>();
}
