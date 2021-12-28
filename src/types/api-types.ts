export interface ICountryForecast {
  cod: string;
  message: number;
  /** Number of timestamps */
  cnt: number;
  /** List of values */
  list: DayEntry[];
  city: City;
}

export interface City {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface Coord {
  lat: number;
  lon: number;
}

export interface DayEntry {
  /** Time of data forecasted */
  dt: number;
  main: Main;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  rain?: {
    "1h": number;
  };
  snow?: {
    "1h": number;
  };
  visibility: number;
  /**  Probability of precipitation */
  pop: number;
  sys: Sys;
  dt_txt: string;
}

/** Cloudiness, % */
export interface Clouds {
  all: number;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface Sys {
  pod: string;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}
