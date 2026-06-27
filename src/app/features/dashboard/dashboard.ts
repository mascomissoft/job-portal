import { Component } from '@angular/core';
import { Job, JobCard } from '../../shared/components/job-card/job-card';

@Component({
  selector: 'app-dashboard',
  imports: [JobCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  allJobs: Job[] = [
    { id: 1, title: 'Senior Frontend Engineer', department: 'IT', status: 'active', applicants: 45 },
    { id: 2, title: 'SQA Engineer', department: 'QA', status: 'active', applicants: 12 },
    { id: 3, title: 'Merchandiser', department: 'RMG', status: 'draft', applicants: 0 },
    { id: 4, title: 'HR Manager', department: 'HR', status: 'closed', applicants: 89 }
  ];

  get activeJobs() { return this.allJobs.filter(j => j.status === 'active'); }
  get draftJobs() { return this.allJobs.filter(j => j.status === 'draft'); }
  get closedJobs() { return this.allJobs.filter(j => j.status === 'closed'); }

  handleViewDetails(jobId: number) {
    alert(`Navigating to Job ID: ${jobId}`);
    
  }
}
