import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'votingSort'
})
export class VotingSortPipe implements PipeTransform {
  
  transform(items: any[]): any[] {
    return items.sort((a, b) => {
      let voteA = a.vote || {sum: 0, timestamp: 0};
      let voteB = b.vote || {sum: 0, timestamp: 0};

      return voteB.sum - voteA.sum || voteB.timestamp - voteA.timestamp;
    });
  }
}
