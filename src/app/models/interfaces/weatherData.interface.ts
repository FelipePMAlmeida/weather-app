export interface WeatherData {
  coord: {
    lon: number,
    lat: number
  },
  weather: [{
    id: number,
    description: string,
    icon: string,
    main: string
  }],
  base: string,
  main: {
    temp: number,
    fells_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    grnd_level: number,
    humidity: number,
    sea_level: number
  },
  visibility: number,
  wind: {
    speed: number,
    deg: number
  },
  clouds: {
    all: number
  },
  dt: number,
  sys: {
    type: number,
    id: number,
    country: string,
    sunrise: number,
    sunset: number
  },
  timezone: number,
  id: number,
  name: string,
  cod: number
}
