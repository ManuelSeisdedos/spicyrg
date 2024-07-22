import playwright from 'playwright' // Elegimos chromium (despues hay que dectectar bien que navegador tiene el cliente)

// ¡La libreria playwright funciona de manera ASINCRONICA!
(async () => {
  process.loadEnvFile()

  const browser = await playwright.chromium.launch({ // Con launch iniciamos el navegador
    headless: true // En true, abre el navegador en segundo plano
  })

  const context = await browser.newContext() // Generamos un contexto en incognito

  const page = await context.newPage() // Abrimos una pestaña

  await page.goto('https://www.instagram.com/accounts/login/?hl=es') // Y le indicamos la url a la que queremos navegar

  const userInput = page.locator('input[name="username"]')
  const passInput = page.locator('input[name="password"]')
  const submitButton = page.locator('button[type="submit"]')

  const username = process.env.INSTAGRAM_USERNAME
  const password = process.env.INSTAGRAM_PASSWORD

  await userInput.fill(username)
  await passInput.fill(password)

  await submitButton.click()

  await page.goto('https://www.instagram.com/vis.dlss')

  await page.waitForSelector('._ac7v') // ._aagv div que contiene el elemento img _ac7v

  const json = await page.$$eval('._ac7v', (containers) => {
    const data = containers.map((container) => {
      const links = Array.from(container.querySelectorAll('a'))
      return links.map((link) => {
        const uuid = crypto.randomUUID()
        const imgHref = link.getAttribute('href') // Obtenemos la url
        const imgUrl = 'https://www.instagram.com'.concat(imgHref)
        const imgElement = link.querySelector('img')
        const imgSrc = imgElement ? imgElement.getAttribute('src') : null // Verificamos si hay un elemento img
        return { uuid, imgUrl, imgSrc }
      })
    }).flat() // Uso de flat: Después de mapear los contenedores y los enlaces, se usa .flat() para aplanar el array de arrays en un solo array de objetos.
    return JSON.stringify(data)
  })

  console.log(json)

  await context.close() // Cerramos el contexto
  await browser.close() // Cerramos el navegador
})()
