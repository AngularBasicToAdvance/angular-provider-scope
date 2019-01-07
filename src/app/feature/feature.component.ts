import { Component, OnInit } from '@angular/core';
import { VoteService } from '../vote.service';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css'],
  providers: [VoteService]
})
export class FeatureComponent implements OnInit {

  votes: number;
  constructor(private vt: VoteService) { }

  ngOnInit() {
    this.vt.setVotes(55);
    this.votes = this.vt.getVotes();
  }
}
