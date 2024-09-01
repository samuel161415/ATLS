// timeline.component.ts
import { Component, OnInit } from '@angular/core';
import { years,timeline } from '../../static/years';
// import { HighlightNumbersPipe } from 'src/app/highlight-numbers.pipe';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'], // Update the path accordingly
})
export class TimelineComponent implements OnInit {
  years: any[] = [];
  currentDate: Date = new Date();
  
  ngOnInit(): void {
    this.years = timeline ;
  }

  closeTimelineModal() {
    // Emit event or handle modal close
  }
  

  isPastEndDate(endDate: string): boolean {
    const currentDate = new Date();
    const end = new Date(endDate);
    return currentDate > end;
  }

  // Helper function to check if the current date is between the start and end dates
  isBetweenDates(startDate: string, endDate: string): boolean {
    const currentDate = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);
    return currentDate >= start && currentDate <= end;
  }
}
