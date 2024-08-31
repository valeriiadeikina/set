import Team from "../Team";

const team = new Team();

const halk = { halk: 800 };
const cat = { cat: 1000 };
const dog = { dog: 1000 };
const cow = { cow: 1000 };

test("add character", () => {
  const result0 = team.add(halk);
  expect(result0).toBe(true);
  expect(team.toArray()).toEqual([{ halk: 800 }]);
});

test("add the same character", () => {
  const result1 = team.add(halk);
  expect(result1).toBe(false);
});

test("add many characters", () => {
  team.addAll(cat, dog, cow);
  expect(team.toArray()).toEqual([
    { halk: 800 },
    { cat: 1000 },
    { dog: 1000 },
    { cow: 1000 },
  ]);
});

test("set to array", () => {
  const arrayFromSet = team.toArray();
  expect(typeof arrayFromSet).toEqual("object");
  expect(arrayFromSet).toEqual([
    { halk: 800 },
    { cat: 1000 },
    { dog: 1000 },
    { cow: 1000 },
  ]);
});
