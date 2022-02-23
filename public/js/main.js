const submitBtn=document.getElementById('submitBtn');
const cityName=document.getElementById('cityName');
const city_name=document.getElementById('city_name');
const temp_real=document.getElementById('temp');
const temp_status=document.getElementById('temp_status');
const datahide=document.querySelector('.middle_layer');

const getInfo=async (event)=>{
    event.preventDefault();
    let cityVal=cityName.value
    if (cityVal===''){
        city_name.innerText='Please write name before search'
        datahide.classList.add('data_hide')
    }else{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=ee3955202ae42587750237a30fa4cafa`
            const response=await fetch(url)
            const data=await response.json()
            const arrData=[data]

            city_name.innerText=`${arrData[0].name}, ${arrData[0].sys.country}`
            temp_real.innerText=arrData[0].main.temp
            const tempStatus=arrData[0].weather[0].main

            if (tempStatus == 'Sunny'){
                temp_status.innerHTML = '<i class="fa fa-solid fa-sun" style="color: #eccc68"></i>'
              }else if (tempStatus == 'Clouds'){
                temp_status.innerHTML = '<i class="fa fa-solid fa-cloud" style="color: #dfe4ea"></i>'
              }else if (tempStatus == 'Rainy'){
                temp_status.innerHTML = '<i class="fa fa-solid fa-rain" style="color: #a4b0be"></i>'
              }else{ 
                temp_status.innerHTML = '<i class="fa fa-solid fa-cloud" style="color: #44c3de"></i>'
              }
              datahide.classList.remove('data_hide')

        }catch{
            city_name.innerText='Please enter valid data'
            datahide.classList.add('data_hide')
        }        
    }
}

submitBtn.addEventListener('click', getInfo)
