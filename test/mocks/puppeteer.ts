const pdfBuffer = Buffer.from('%PDF-1.4\n%âãÏÓ\n');

const createPage = () => ({
  setContent: () => Promise.resolve(undefined),
  pdf: () => Promise.resolve(pdfBuffer),
});

const launch = () =>
  Promise.resolve({
    newPage: () => Promise.resolve(createPage()),
    close: () => Promise.resolve(undefined),
  });

const puppeteer = {
  launch,
};

export default puppeteer;
