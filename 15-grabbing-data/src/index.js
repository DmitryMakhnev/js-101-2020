// see https://pptr.dev/ Usage

const path = require('path');
const puppeteer = require('puppeteer');
const saveJSON = require('./save-json').saveJSON;

const delay = time => new Promise(resolve => setTimeout(resolve, time));

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(
    'https://spb.kassir.ru/bilety-na-koncert',
    {
      waitUntil: 'networkidle2'
    }
  );
  console.log(`Page was opened`);

  const pageTitle = await page.title();
  console.log(`Page title: "${pageTitle}"`);

  for (let i = 0; i < 5; i++ ) {
    console.log(`Load chunk: ${i + 1}`);

    await page.$eval(
      '.more.js-pager-button',
        element => element.scrollIntoView({ block: 'center' })
    );
    await page.click('.more.js-pager-button');
    await page.waitForSelector(
      `.js-filter-content > .loading`,
    );
    await page.waitForSelector(
      `.js-filter-content > .loading`,
      { hidden: true }
    );
    await delay(1000);
  }

  const shows = await page.$$eval(
    '.js-pager-container .event.js-ec-impression',
    events => events.map(
      event => event.parentNode
        .querySelector('script[type="application/ld+json"]')
        .textContent
        .trim()
    )
  );

  const processedShows = shows.map(show => {
    const parsedShow = JSON.parse(show);
    return {
      name: parsedShow.name,
      data: parsedShow.startDate
    };
  });

  await saveJSON(
    path.resolve('./results/show.json'),
    processedShows
  );

  await page.close();
  await browser.close();
})();
