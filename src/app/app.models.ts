export class GetWeatherDataResponse implements IGetWeatherDataResponse {
    count?: number;
    data?: WeatherViewModel[] | undefined;

    constructor(data?: IGetWeatherDataResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.count = _data["count"];
            if (Array.isArray(_data["data"])) {
                this.data = [] as any;
                for (let item of _data["data"])
                    this.data!.push(WeatherViewModel.fromJS(item));
            }
        }
    }

    static fromJS(data: any): GetWeatherDataResponse {
        data = typeof data === 'object' ? data : {};
        let result = new GetWeatherDataResponse();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["count"] = this.count;
        if (Array.isArray(this.data)) {
            data["data"] = [];
            for (let item of this.data)
                data["data"].push(item.toJSON());
        }
        return data;
    }
}

export interface IGetWeatherDataResponse {
    count?: number;
    data?: WeatherViewModel[] | undefined;
}

export class WeatherViewModel implements IWeatherViewModel {
    date?: string | undefined;
    time?: string | undefined;
    temperature?: number;
    relativeHumidity?: number;
    dewPoint?: number;
    atmospherePressure?: number;
    windDirection?: string | undefined;
    windSpeed?: number;
    cloudiness?: number;
    cloudBase?: number;
    horizontalVisibility?: string | undefined;
    weatherConditions?: string | undefined;
    count?: number;

    constructor(data?: IWeatherViewModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.date = _data["date"];
            this.time = _data["time"];
            this.temperature = _data["temperature"];
            this.relativeHumidity = _data["relativeHumidity"];
            this.dewPoint = _data["dewPoint"];
            this.atmospherePressure = _data["atmospherePressure"];
            this.windDirection = _data["windDirection"];
            this.windSpeed = _data["windSpeed"];
            this.cloudiness = _data["cloudiness"];
            this.cloudBase = _data["cloudBase"];
            this.horizontalVisibility = _data["horizontalVisibility"];
            this.weatherConditions = _data["weatherConditions"];
            this.count = _data["count"];
        }
    }

    static fromJS(data: any): WeatherViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new WeatherViewModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["date"] = this.date;
        data["time"] = this.time;
        data["temperature"] = this.temperature;
        data["relativeHumidity"] = this.relativeHumidity;
        data["dewPoint"] = this.dewPoint;
        data["atmospherePressure"] = this.atmospherePressure;
        data["windDirection"] = this.windDirection;
        data["windSpeed"] = this.windSpeed;
        data["cloudiness"] = this.cloudiness;
        data["cloudBase"] = this.cloudBase;
        data["horizontalVisibility"] = this.horizontalVisibility;
        data["weatherConditions"] = this.weatherConditions;
        data["count"] = this.count;
        return data;
    }
}

export interface IWeatherViewModel {
    date?: string | undefined;
    time?: string | undefined;
    temperature?: number;
    relativeHumidity?: number;
    dewPoint?: number;
    atmospherePressure?: number;
    windDirection?: string | undefined;
    windSpeed?: number;
    cloudiness?: number;
    cloudBase?: number;
    horizontalVisibility?: string | undefined;
    weatherConditions?: string | undefined;
    count?: number;
}

export class UploadFilesResponse implements IUploadFilesResponse {
    fileName?: string | undefined;
    isSuccess?: boolean;

    constructor(data?: IUploadFilesResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.fileName = _data["fileName"];
            this.isSuccess = _data["isSuccess"];
        }
    }

    static fromJS(data: any): UploadFilesResponse {
        data = typeof data === 'object' ? data : {};
        let result = new UploadFilesResponse();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["fileName"] = this.fileName;
        data["isSuccess"] = this.isSuccess;
        return data;
    }
}

export interface IUploadFilesResponse {
    fileName?: string | undefined;
    isSuccess?: boolean;
}

export class Month {
    month: string | undefined;
    monthNumber: number | undefined;
}