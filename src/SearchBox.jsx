import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchBox.css"
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city, setCity]=useState("");
    let [error, setError] = useState("");

    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="d21ef5727e43483f9009d8ee158b88dc";

    let getWeatherInfo=async()=>{
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse=  await response.json();

            if (jsonResponse.cod !== 200) {
                setError("Place does not exist!");
                return null;
            }

            setError(""); 
            let result={
                city: jsonResponse.name,
                temp:jsonResponse.main.temp,
                tempMin:jsonResponse.main.temp_min,
                tempMax:jsonResponse.main.temp_max, 
                humidity:jsonResponse.main.humidity,
                feelsLike:jsonResponse.main.feels_like,
                weather:jsonResponse.weather[0].description,
            }
            return result;
        } catch (error) {
            setError("Something went wrong. Try again.");
            return null;
        }
    }

    let handleChange=(event)=>{
        setCity(event.target.value);
    }

    let handleSubmit= async (event)=>{
        event.preventDefault();
        let newinfo =await getWeatherInfo();
        if(newinfo){
            updateInfo(newinfo);
        }
        setCity("");
    }

    return(
        <div className='searchbox'>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name"
                 variant="outlined" required value={city}
                 onChange={handleChange} />
                <br /> <br /> <br />
                <Button type='submit' variant="contained" >Search</Button>
            </form>

            {error && <p style={{color:"red", marginTop:"10px"}}>{error}</p>}
        </div>
    )
}
