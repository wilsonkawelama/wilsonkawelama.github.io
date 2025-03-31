window.onload = () =>{

const successCallback = (position) =>{
    console.log(position);
}
const errorCallback = (error) =>{
    console.log(error);
}
const options = {
    enableHighAccurancy: true,
    timeout:10000
}
const id = navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);
}
