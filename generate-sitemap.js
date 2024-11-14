import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const urls = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'daily', priority: 0.8 },
    // TODO: Find a way to make this use existing projects?
    { url: '/project/0', changefreq: 'daily', priority: 0.6 },
    { url: '/project/1', changefreq: 'daily', priority: 0.6 },
    { url: '/project/2', changefreq: 'daily', priority: 0.6 },
    { url: '/project/3', changefreq: 'daily', priority: 0.6 },
    { url: '/project/4', changefreq: 'daily', priority: 0.6 },
];

async function generateSitemap() {
    const sitemap = new SitemapStream({ hostname: 'https://www.yourischeepers.com' });

    urls.forEach(url => sitemap.write(url));
    sitemap.end();

    const sitemapOutput = await streamToPromise(sitemap).then(sm => sm.toString());
    createWriteStream('./dist/sitemap.xml').write(sitemapOutput);

    console.log('Sitemap generated successfully!');
}

generateSitemap();