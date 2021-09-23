import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Country } from 'src/app/interfaces/country';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss']
})
export class VotingComponent implements OnInit {
  @Input() country!: Country;
  @Output() voted: EventEmitter<any> = new EventEmitter();

  public sum!: number;
  private max = 20;

  constructor() { }

  ngOnInit() {
    let vote = this.country.vote;
    this.sum = vote ? vote.sum : 0;
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
    this.country.vote = {
      sum: voteSum,
      timestamp: Date.now()
    };
    this.voted.emit(this.country);
  }
}