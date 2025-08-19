import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';


export default function InfoBox({info}){
     const HOT_URL = "https://images.unsplash.com/photo-1579566346927-c68383817a25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80";
    const COLD_URL = "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80";
    const RAIN_URL = "https://images.unsplash.com/photo-1438449805896-28a666819a20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80";
    return(
        <div className='InfoBox'>
         
            <div className='cardcontainer'>
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
            info.humidity>80
            ? RAIN_URL
            :info.temp >20
            ? HOT_URL
            : COLD_URL
        }
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
            info.humidity>80
            ? <ThunderstormIcon/>
            :info.temp >20
            ? <SunnyIcon/>
            : <AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <div>Temprature={info.temp}&deg;C</div>
          <div>Humidity={info.humidity}</div>
          <div>Min Temp={info.tempMin}&deg;C</div>
          <div>Max Temp={info.tempMax}&deg;C</div>
          <div>The weather can be described as <i>{info.weather} </i> and  feels like={info.feelsLike}&deg;C</div>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}
