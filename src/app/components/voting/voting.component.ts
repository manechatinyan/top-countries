import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Vote } from 'src/app/interfaces/vote';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss']
})
export class VotingComponent implements OnInit {
  @Input() itemName!: string;
  @Input() votes: any;
  @Output() voted: EventEmitter<any> = new EventEmitter();

  public sum!: number;
  private max = 20;

  constructor() { }

  ngOnInit() {
    this.sum = this.votes[this.itemName].sum || 0;
  }

  public upvote(): void {
    if(this.sum === this.max){
      return;
    }
    this.setVote(++this.sum);
  }

  public downvote(): void {
    if (!this.sum) {
      return;
    }
    this.setVote(--this.sum);
  }

  private setVote(voteSum: number): void {
    let vote: Vote = {
      sum: voteSum,
      timestamp: Date.now()
    }
    this.votes[this.itemName] = vote;
    this.voted.emit(this.votes);
  }
}