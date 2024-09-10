import { Component, OnDestroy, OnInit } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Subject, takeUntil } from 'rxjs';

import { WeatherService } from '../../services/weather.service';
import { WeatherData } from 'src/app/models/interfaces/weatherData.interface';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: []
})
export class WeatherHomeComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<void> = new Subject();
  defaultCityName: string = 'Curitiba';
  weatherData!: WeatherData;
  searchIcon = faMagnifyingGlass;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherData(this.defaultCityName);
  }

  getWeatherData(cityName: string): void {
    this.weatherService.getWeatherData(cityName)
    .pipe(takeUntil(this.destroy$)) //Sets a destroy(unsubscribe) to be destroyed at end of life circle
      .subscribe({
        next: (response) => {
          response && (this.weatherData = response);
          console.log(this.weatherData);
        }, error: (error) => console.log(error),
      });
  }

  //Reset city name after getting default value
  onSubmit(): void {
    this.getWeatherData(this.defaultCityName);
    console.log("Chamou, danado!");
    this.defaultCityName = '';
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
