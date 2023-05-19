const { GoogleSpreadsheet } = require('google-spreadsheet');
const moment = require('moment-timezone');

async function updateSheet(testCasesPassed) {
  const doc = new GoogleSpreadsheet('1S_51UI9RW3s5rB13TXlppAjabUDZouGM4ERFz_e-1v4');
  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SHEETS_EMAIL,
    private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, '\n'),
  });

  const currentDate = moment().tz('Asia/Jakarta');
  // Format the date as DD-MM-YYYY
  const dateFormatted = currentDate.format('DD-MM-YYYY');
  
  // Format the time as H:m:s
  const timeFormatted = currentDate.format('H:m:s');
  
  await doc.loadInfo();

  const sheet = doc.sheetsByTitle['Sheet1'];
  const row = await sheet.addRow({
    Username: process.env.GITHUB_ACTOR,
    Email: process.env.GITHUB_EMAIL,
    'Repository URL': `https://github.com/${process.env.GITHUB_REPOSITORY}`,
    // 'Successful Test Cases': parseInt(process.env.TEST_CASES_PASSED),
    'Successful Test Cases': process.env.TEST_CASES_PASSED,
    'Deployment address': `https://${process.env.GITHUB_ACTOR}.github.io`,
    'Date': dateFormatted,
    'Time': timeFormatted
  });
  console.log(`Added row ${row.rowNumber} to the sheet.`);
}

updateSheet();
