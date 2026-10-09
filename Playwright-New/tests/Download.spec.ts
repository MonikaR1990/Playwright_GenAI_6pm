import { test } from '@playwright/test'

test('Download File', async({page})=>{
    await page.goto("https://letcode.in/file")

    //start wait/listen for the download event //a download event is going to haapen, so listen for the download event
    const downloadPromise =  page.waitForEvent('download')

    //click the download button
    await page.locator('#xls').click()

    //Wait for the download event and get the result/capture the result
    const downloadedFile = await downloadPromise

    //save the downloaded file
    await downloadedFile.saveAs(`downloadFiles/` + downloadedFile.suggestedFilename())

    console.log(downloadedFile.url())

    const templDownload = await downloadedFile.path()
    console.log(templDownload)



     
    await page.waitForTimeout(3000)
})

//Promise ==> A represents an asynchronus operation that may complete in future
//downloadPromise ==> stores the Promise represents that wait

//downloadedFile ==> DownloadObject (the information and methods for working with the download file)