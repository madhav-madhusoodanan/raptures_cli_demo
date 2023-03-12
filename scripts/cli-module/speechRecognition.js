const { chromium } = require("playwright-webkit") // Or 'chromium' or 'firefox'.

const _scanVoiceForSpeechInBrowser = async () => {
    class DeferredPromise {
        constructor() {
            this.promise = new Promise((resolve, reject) => {
                this.reject = reject
                this.resolve = resolve
            })
        }
    }
    const recognition = new webkitSpeechRecognition()

    // set the properties of the recognition object
    recognition.lang = "en-US" // set the language
    recognition.interimResults = true // do not show interim results

    const deferredPromise = new DeferredPromise()

    // add an event listener for the "result" event
    recognition.onresult = function (event) {
        const transcript = event.results[0][0].transcript
        deferredPromise.resolve(transcript)
    }

    // start the recognition
    await recognition.start()
    const result = await deferredPromise.promise

    return result
}

const scanVoiceForSpeech = async () => {
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()
    // kept for backup
    // await page.goto("https://example.com")
    const transcript = await page.evaluate(_scanVoiceForSpeechInBrowser)
    console.log(transcript)

    /* Now here is where the speech detection api works */
    await browser.close()
    return transcript
}

scanVoiceForSpeech()
// module.exports = scanVoiceForSpeech
