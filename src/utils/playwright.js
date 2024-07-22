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

  await page.waitForSelector('._ac7v') // ._aagv div que contiene el elemento img _ac7v

  const json = await page.$$eval('._ac7v', (results) => (results.map((container) => {
    const publications = container.querySelectorAll('.x1lliihq')
    const publicationsData = publications.map((publication) => {
      const imgUrl = publication.querySelector('a').getAttribute('href')
      const imgUrlComplete = 'https://www.instagram.com'.concat(imgUrl)
      const imgSrc = publication.querySelector('img').getAttribute('src')
      return { imgUrlComplete, imgSrc }
    })
    return { publicationsData }
  })))

  console.log({ json })

  await context.close()
  await browser.close() // Cerramos el navegador
})()
