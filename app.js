
const OPTIONS = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '9404062e0amsh65931dad8945bdbp10b88ajsn3faaa602536d',
      'X-RapidAPI-Host': 'ip-geo-location-find-ip-location-and-details.p.rapidapi.com'
    }
  };

  const fetchIpInfo = ip =>{
    return fetch(`https://ip-geo-location-find-ip-location-and-details.p.rapidapi.com/iplocation/${ip}`, OPTIONS)
    
        .then(res => res.json())
        .catch(err => console.error(err))
        
  }

  const $form = document.querySelector('#form')
  const $input = document.querySelector('#input')
  const $submit = document.querySelector('#submit')
  const $results = document.querySelector('#results')

  $form.addEventListener('submit', async (event)=>{
    event.preventDefault()
    const {value} = $input
    if(!value) return 

    $submit.setAttribute('disabled', '')
    $submit.setAttribute('aria-busy', 'true')

    const ipInfo = await fetchIpInfo(value)

    if(ipInfo){
        console.log(ipInfo)
        $results.innerHTML = JSON.stringify(ipInfo, null, 2)
    }
        $submit.removeAttribute('disabled')
        $submit.removeAttribute('aria-busy')
  })