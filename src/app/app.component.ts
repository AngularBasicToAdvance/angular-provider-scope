import { Component, OnInit } from '@angular/core';
import { VoteService } from './vote.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  /*providers: [VoteService]*/
})
export class AppComponent implements OnInit {
  title = 'AngProvidersScope';
  votes: any;
  constructor(private voteService: VoteService) {  }
  ngOnInit() {
    this.votes = this.voteService.getVotes();
    this.voteService.setVotes(25);
  }
}
