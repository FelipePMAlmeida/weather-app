import { Component, Input, OnInit } from '@angular/core';
import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';
import { WeatherData } from 'src/app/models/interfaces/weatherData.interface';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: []
})

export class WeatherCardComponent {

  //Weather forecast data provided by parent component (WeatherData)
  @Input() weatherDataInput!: WeatherData;

  minTemperatureIcon = faTemperatureLow;
  maxTemperatureIcon = faTemperatureHigh;
  humidityIcon = faDroplet;
  windIcon = faWind;
}
