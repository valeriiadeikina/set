export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(member) {
    if (this.members.has(member)) {
      console.log("Error: Member already exists in the team.");
      return false;
    } else {
      this.members.add(member);
      return true;
    }
  }

  addAll(...characters) {
    for (let i = 0; i < characters.length; i++) {
      this.members.add(characters[i]);
    }
    return this.members;
  }

  toArray() {
    return [...this.members];
  }
}
