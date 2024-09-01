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

  customIterator() {
    let index = 0;
    const membersArray = [...this.members];
    return {
      next() {
        if (index < membersArray.length) {
          return {
            value: membersArray[index++],
            done: false,
          };
        } else {
          return {
            value: undefined,
            done: true,
          };
        }
      },
    };
  }

  *[Symbol.iterator]() {
    for (const member of this.members) {
      yield member;
    }
  }
}

const team = new Team();

const halk = { halk: 800 };
const cat = { cat: 1000 };
const dog = { dog: 1000 };
const cow = { cow: 1000 };

team.addAll(halk, cat, dog, cow);

const iterator = team.customIterator();
console.log(iterator.next());
console.log(iterator.next());