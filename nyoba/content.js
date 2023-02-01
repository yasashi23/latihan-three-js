
const title = document.querySelectorAll('.job-tile-title')
const link = document.querySelectorAll('.job-tile-title a')
const href = link[0].href
const deskripsi = document.querySelectorAll('[data-test="job-description-text"]')
const proposal = document.querySelectorAll('small strong[data-test="proposals"]')
const payment = document.querySelectorAll('[data-test="payment-verification-status"] .text-muted')
const spend = document.querySelectorAll('[data-test="client-spendings"] strong')
const country = document.querySelectorAll('[data-test="client-country"] strong')


// alert(`judul: ${title[0].textContent}\nproposal: ${proposal[0].textContent}\npayment: ${payment[0].textContent}\nCountry: ${country[0].textContent}\nSpend: ${spend[0].textContent}`)
// alert(`Deskripsi:\n${deskripsi[0].textContent}`)
// alert(`Deskripsi:\n${href}`)



fetch('http://localhost:3001/data-ku', {
    method:'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        judul: title[0].textContent,
        propo: proposal[0].textContent,
        paymentnya: payment[0].textContent,
        negara: country[0].textContent,
        spendnya: spend[0].textContent,
        linknya: href,
        desk: deskripsi[0].textContent
    
    })
})
.then(res => res.json())
.then(response => console.log(response.success))
.catch(err => console.log(err))



// fetch('http://localhost:3001')
// .then((res)=> {
//     alert(res)
// })
// .catch(()=> {
//     alert('gagal')
// })