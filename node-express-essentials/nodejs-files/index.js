const fs = require('fs').promises;
const path = require('path');

async function calculateSalesTotal(salesFiles) {
  let salesTotal = 0;
  // Loop over each file path in the salesFiles array
  for (file of salesFiles) {
    // Read the file and parse the contents as JSON
    const data = JSON.parse(await fs.readFile(file));
    // Add the amount in the data.total field to the salesTotal variable
    salesTotal += data.total;
  }

  return salesTotal;
}

async function findSalesFiles(folderName) {
  // This array will hold sales files as they are found
  let salesFiles = [];

  async function findFiles(folderName) {
    // Read all the items in the current folder
    const items = await fs.readdir(folderName, { withFileTypes: true });

    // Iterate over each found item
    for (item of items) {
      // If the item is a directory, it will need to be searched
      if (item.isDirectory()) {
        // Call this method recursively, appending the folder name to make a new path
        await findFiles(path.join(folderName, item.name));
      } else {
        // Make sure the discovered file is a .json file
        if (path.extname(item.name) === '.json') {
          // Store the file path in the salesFiles array
          salesFiles.push(path.join(folderName, item.name));
        }
      }
    }
  }

  await findFiles(folderName);

  return salesFiles;
}

async function main() {
  const salesDir = path.join(__dirname, 'stores');
  const salesTotalsDir = path.join(__dirname, 'salesTotals');

  // Create the salesTotal directory if it doesn't exist
  try {
    await fs.mkdir(salesTotalsDir);
  } catch {
    console.log(`${salesTotalsDir} already exists.`);
  }

  // Find paths to all the sales files
  const salesFiles = await findSalesFiles(salesDir);

  // Read through each sales file to calculate the sales total
  const salesTotal = await calculateSalesTotal(salesFiles);

  // Write the total to the 'totals.txt' file
  await fs.writeFile(
    path.join(salesTotalsDir, 'totals.txt'),
    `${salesTotal}\r\n`,
    { flag: 'a' }
  );

  console.log(`Wrote sales totals to ${salesTotalsDir}`);
}

main();
