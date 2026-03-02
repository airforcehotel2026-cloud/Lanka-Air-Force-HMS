const puppeteer = require('puppeteer')
const fs = require('fs')
const path = require('path')

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

async function generateGuide() {
  console.log('Starting PDF generation process...')
  const browser = await puppeteer.launch({
    headless: 'new',
    defaultViewport: { width: 1280, height: 800 },
  })
  const page = await browser.newPage()

  // Create screenshots directory
  const screenshotsDir = path.join(__dirname, 'screenshots_temp')
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir)
  }

  const screenshots = {}

  try {
    console.log('Navigating to login page...')
    await page.goto('http://localhost:9000/#/login', { waitUntil: 'networkidle0' })

    // Fill login
    console.log('Logging in as admin...')
    const inputs = await page.$$('input')
    await inputs[0].type('admin')
    await inputs[1].type('admin')

    // Find and click login button
    await page.click('button[type="submit"]')

    await wait(2000) // Wait for login and routing

    const capturePage = async (route, name, actions = null) => {
      console.log(`Capturing ${name}...`)
      await page.goto(`http://localhost:9000/#${route}`, { waitUntil: 'networkidle0' })
      await wait(1000) // Allow animations to finish
      if (actions) await actions(page)
      const filePath = path.join(screenshotsDir, `${name}.png`)
      await page.screenshot({ path: filePath, fullPage: true })
      screenshots[name] =
        `data:image/png;base64,${fs.readFileSync(filePath, { encoding: 'base64' })}`
    }

    await capturePage('/', 'dashboard')
    await capturePage('/banquet', 'banquet')
    await capturePage('/calendar', 'calendar')
    await capturePage('/reports', 'reports')
    await capturePage('/menus', 'menus')
    await capturePage('/template-blocks', 'templates')
    await capturePage('/audit-logs', 'audits')
    await capturePage('/inventory', 'inventory')

    console.log('All screenshots captured. Generating HTML...')

    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Lanka Air Force HMS - User Guide</title>
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
        .page { padding: 40px; page-break-after: always; }
        h1 { color: #00308f; text-align: center; border-bottom: 2px solid #ffd700; padding-bottom: 10px; }
        h2 { color: #00308f; margin-top: 30px; }
        h3 { color: #444; }
        .lang-en { margin-bottom: 10px; font-weight: 500; }
        .lang-si { margin-bottom: 20px; color: #555; }
        .screenshot { max-width: 100%; height: auto; border: 1px solid #ccc; box-shadow: 0 4px 8px rgba(0,0,0,0.1); margin: 20px 0; border-radius: 4px; }
        .cover { height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; }
        .cover h1 { font-size: 3em; border: none; }
        .footer { text-align: center; margin-top: 50px; font-size: 0.8em; color: #888; }
      </style>
    </head>
    <body>
      <div class="page cover">
        <h1>Lanka Air Force Hotel Management System</h1>
        <h2>System User Guide & Operational Manual</h2>
        <p class="lang-si" style="font-size: 1.5em; margin-top: 20px;">පද්ධති පරිශීලක අත්පොත</p>
        <div style="margin-top: 50px;">
          <p>Prepared for: Sri Lanka Air Force</p>
          <p>Generated on: ${new Date().toLocaleDateString()}</p>
        </div>
      </div>

      <div class="page">
        <h2>1. System Dashboard / ප්‍රධාන තිරය</h2>
        <p class="lang-en">The dashboard provides an overview of today's events, pending tasks, and quick actions.</p>
        <p class="lang-si">ප්‍රධාන තිරය මගින් අද දිනට නියමිත සිදුවීම්, ඉටු කිරීමට ඇති කාර්යයන් සහ ඉක්මන් ක්‍රියාකාරකම් පිළිබඳ දළ විශ්ලේෂණයක් සපයයි.</p>
        <img src="${screenshots.dashboard}" class="screenshot" alt="Dashboard" />
      </div>

      <div class="page">
        <h2>2. Banquet Booking / උත්සව වෙන් කිරීම්</h2>
        <p class="lang-en">Register new banquets, fill client details (with NIC auto-fill), and calculate billing with special discounts.</p>
        <p class="lang-si">නව උත්සව වෙන් කිරීම්, පාරිභෝගික තොරතුරු ඇතුළත් කිරීම (NIC මගින් ස්වයංක්‍රීයව පිරවීම) සහ විශේෂ වට්ටම් සහිතව බිල්පත් සකස් කිරීම මෙතැනින් සිදු කළ හැක.</p>
        <img src="${screenshots.banquet}" class="screenshot" alt="Banquet Booking" />
      </div>

      <div class="page">
        <h2>3. Calendar View / දින දර්ශනය</h2>
        <p class="lang-en">View all upcoming events visually. Click on any event to see brief details.</p>
        <p class="lang-si">ඉදිරියේදී පැවැත්වෙන සියලුම උත්සව දින දර්ශනයක් ලෙස මෙතැනින් බලාගත හැක. ඕනෑම උත්සවයක් මත ක්ලික් කිරීමෙන් එහි කෙටි විස්තරයක් බලාගත හැක.</p>
        <img src="${screenshots.calendar}" class="screenshot" alt="Calendar" />
      </div>

      <div class="page">
        <h2>4. Menu Management & Pricing / මෙනු කළමනාකරණය සහ මිල ගණන්</h2>
        <p class="lang-en">Create menus, set kitchen costs, and manage the approval workflow (Kitchen -> F&B -> Accounts -> Publish).</p>
        <p class="lang-si">නව මෙනු සෑදීම, මුළුතැන්ගෙයි පිරිවැය ඇතුළත් කිරීම සහ අනුමත කිරීමේ ක්‍රියාවලිය (මුළුතැන්ගෙය -> F&B -> ගිණුම් අංශය -> ප්‍රකාශයට පත් කිරීම) මෙතැනින් පාලනය කෙරේ.</p>
        <img src="${screenshots.menus}" class="screenshot" alt="Menu Management" />
      </div>

      <div class="page">
        <h2>5. Template Blocks / සැකිලි කොටස්</h2>
        <p class="lang-en">Manage quick-add text blocks to rapidly build menu descriptions without typing repeatedly.</p>
        <p class="lang-si">මෙනු විස්තර ඉක්මනින් සකස් කිරීම සඳහා නිතර භාවිතා වන පාඨ කොටස් (Template Blocks) මෙතැනින් කළමනාකරණය කළ හැක.</p>
        <img src="${screenshots.templates}" class="screenshot" alt="Template Blocks" />
      </div>

      <div class="page">
        <h2>6. Financial Reports / මූල්‍ය වාර්තා</h2>
        <p class="lang-en">Analyze revenue, booking statistics, and filter data by date ranges to generate insightful charts.</p>
        <p class="lang-si">ආදායම් වාර්තා, වෙන් කිරීම් සංඛ්‍යාලේඛන සහ දින වකවානු අනුව දත්ත පෙරහන් කර ප්‍රස්ථාර මගින් විශ්ලේෂණය කිරීම මෙතැනින් සිදු කළ හැක.</p>
        <img src="${screenshots.reports}" class="screenshot" alt="Reports" />
      </div>

      <div class="page">
        <h2>7. Inventory Management / තොග කළමනාකරණය</h2>
        <p class="lang-en">Track stock levels, monitor low-stock items, and manage inventory seamlessly.</p>
        <p class="lang-si">භාණ්ඩ තොග මට්ටම් නිරීක්ෂණය කිරීම, අවම තොග ඇති භාණ්ඩ හඳුනා ගැනීම සහ තොග කළමනාකරණය මෙතැනින් සිදු කෙරේ.</p>
        <img src="${screenshots.inventory}" class="screenshot" alt="Inventory" />
      </div>

       <div class="page">
        <h2>8. Audit Logs / විගණන වාර්තා</h2>
        <p class="lang-en">View a secure history of all system actions performed by users for accountability and tracking.</p>
        <p class="lang-si">පද්ධතිය තුළ පරිශීලකයින් විසින් සිදු කරන ලද සියලුම ක්‍රියාකාරකම් වල ආරක්ෂිත ඉතිහාසයක් සෙවීම සහ අධීක්ෂණය කිරීම මෙතැනින් සිදු කෙරේ.</p>
        <img src="${screenshots.audits}" class="screenshot" alt="Audit Logs" />
      </div>

    </body>
    </html>
    `

    console.log('Generating PDF...')
    await page.setContent(htmlContent)
    await wait(2000) // Wait for images to render
    const pdfPath = path.join(__dirname, 'Lanka_Air_Force_HMS_User_Guide.pdf')
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
      margin: { top: '20px', bottom: '20px', left: '20px', right: '20px' },
    })

    console.log(`PDF successfully generated at: ${pdfPath}`)
  } catch (error) {
    console.error('Error during generation:', error)
  } finally {
    await browser.close()
    // Cleanup temporary screenshots directory
    if (fs.existsSync(screenshotsDir)) {
      fs.readdirSync(screenshotsDir).forEach((file) => {
        fs.unlinkSync(path.join(screenshotsDir, file))
      })
      fs.rmdirSync(screenshotsDir)
    }
  }
}

generateGuide()
