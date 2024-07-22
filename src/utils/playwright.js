import playwright from 'playwright' // Elegimos chromium (despues hay que dectectar bien que navegador tiene el cliente)

// ¡La libreria playwright funciona de manera ASINCRONICA!
(async () => {
  const browser = await playwright.chromium.launch({ // Con launch iniciamos el navegador
    headless: false // En true, abre el navegador en segundo plano
  })

  const context = await browser.newContext() // Generamos un contexto en incognito

  const page = await context.newPage() // Abrimos una pestaña

  await page.goto('https://www.instagram.com/') // Y le indicamos la url a la que queremos navegar

  await page.waitForTimeout(30000) // Aca realizar el login con playwright

  await page.waitForSelector('._aagv')

  const info = await page.$$eval('._aagv'
    , (results) => (results.map((el) => {
      const imgSrc = el.querySelector('img').getAttribute('src')
      return { imgSrc }
    })))

  console.log({ info })

  await context.close()
  await browser.close() // Cerramos el navegador
})()
