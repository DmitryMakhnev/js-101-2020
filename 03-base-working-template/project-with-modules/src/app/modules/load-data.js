
export async function loadData() {
  const response = await fetch(
    'https://raw.githubusercontent.com/webpack/webpack/master/package.json'
  );
  const data = await response.json();
  return data;
}
