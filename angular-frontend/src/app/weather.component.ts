import { Component } from '@angular/core';
import { WeatherSettings, TemperatureScale, ForecastMode, WeatherLayout } from 'angular-weather-widget';
 
 
@Component({
  selector: 'mwl-weather-component',
  template: '<weather-widget [settings]="settings"></weather-widget>'
})
export class WeatherComponent {
    settings: WeatherSettings = {
      location: {
        cityName: 'Dublin'
      },
      backgroundColor: '#ffffff',
      color: '#000000',
      width: 'auto',
      height: 'auto',
      showWind: false,
      scale: TemperatureScale.CELCIUS,
      forecastMode: ForecastMode.GRID,
      showDetails: false,
      showForecast: false,
      layout: WeatherLayout.NARROW,
      language: 'en'
    };
}