export class VoteService {

  votes = 10;
  constructor() { }
  getVotes() {
    return this.votes;
  }
  setVotes(vote: number) {
      this.votes = vote;
  }
}
