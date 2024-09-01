import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightNumbers',
  standalone: false
})
export class HighlightNumbersPipe implements PipeTransform {

  transform(value: string): string {
    // Regex to match times and time ranges in the format of "HH:MM am/pm" and "HH:MM am/pm - HH:MM am/pm"
    return value.replace(/(\d{1,2}:\d{2}\s*(?:am|pm)(?:\s*-\s*\d{1,2}:\d{2}\s*(?:am|pm))?)/gi, 
      '<strong class="font-bold text-transparent bg-gradient-to-r from-gold to-yellow-400 bg-clip-text">$1</strong>');
  }

}
