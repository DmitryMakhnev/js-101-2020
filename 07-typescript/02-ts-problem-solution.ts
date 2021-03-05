// https://www.typescriptlang.org/play?#code/C4TwDgpgBACgNgQxAcwE4HsCuA7AJgFQQGcBrKAXigG8AoKKAS1wC4ojhUHtkBuOqbAgC2EVu07c+9CAA8OCVrXr1cEIgGNOYYA3TYxHLr34BfGib41QkKAGEEqXBWr8mBicfo7gcUW0OS-Op6wBDYwO5GfBY0NMHY7FDyCQBm6KhChKRE+Oj2jkTOABTAxCRErPBIaFh4WSQA2gC6AJSs+bjNFAB8SWVEAHRCCGBF-KWkPVBFSspufaQDTAA0-F4MPn4TJAOCIqvKUPGh4azbA7LyA6oaWjp6pi00LZbxieoOuIWUyURpGfUcnlPkQig1+LN6PMAOQARmhB2Uez80IAsggSNAABLoERQADq6RICLWUEuqAULkOKjUmgY2l0+ig0IAShAAO6cUJQBBQIToXCYXxJdBQfDgCAAZTp2hJhxMiLMrVeeiI6F8Azg6GQRQ+BReNCAA

type PlaygroundTask = {
  id: string;
  name: string;
  extra: {
    description: string;
  }
};

type PlaygroundCard = {
  id: string;
  title: string;
  content: string;
};

const transformTasksToCards = (tasks: PlaygroundTask[]): PlaygroundCard[] => tasks.map(
  task => ({
    id: task.id,
    title: task.name,
    content: task.extra.description
  })
);

const cards = transformTasksToCards([
  {
    id: '1',
    name: 'Make Home Work',
    extra: {
      description: 'Rewrite a module to TypeScript',
    },
  }
]);

console.log(cards);
