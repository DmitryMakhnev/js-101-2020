const transformTasksToCards = tasks => tasks.map(
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
    description: 'Rewrite a module to TypeScript',
  }
]);

console.log(cards);
