import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetWeatherDataResponse, Month, WeatherViewModel } from '../app.models';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.scss']
})
export class ArchivesComponent implements OnInit {
  public pageDataCount: number = 20; 
  public year: number = 0;
  public month: number = 0;
  public page: number = 1;
  public years: number[] = [];
  public months: Month[] = [
    {
      month: "Январь",
      monthNumber: 1
    },
    {
      month: "Февраль",
      monthNumber : 2
    },
    {
      month: "Март",
      monthNumber : 3
    },
    {
      month: "Апрель",
      monthNumber : 4
    },
    {
      month: "Май",
      monthNumber : 5
    },
    {
      month: "Июнь",
      monthNumber : 6
    },
    {
      month: "Июль",
      monthNumber : 7
    },
    {
      month: "Август",
      monthNumber : 8
    },
    {
      month: "Сентябрь",
      monthNumber : 9
    },
    {
      month: "Октябрь",
      monthNumber : 10
    },
    {
      month: "Ноябрь",
      monthNumber : 11
    },
    {
      month: "Декабрь",
      monthNumber : 12
    }

  ];

  public data: WeatherViewModel[] = [];
  public config: any = {
    itemsPerPage: 20,
    currentPage: 1,
    totalItems: 0
  };

  constructor(private http: HttpClient,
    private router: Router) { 
    for (let i = 0; i < 20; i++) {
      this.years.push(2000 + i);
    }
  }

  ngOnInit(): void {
    this.watchPage();
  }

  public onGeneral = () => {
    this.router.navigate(['/general']);
  }

  public chooseYear = (year: number) => {
    if (year !== this.year) {
      this.year = year;
      this.pageChanged(1);
    }
  }

  public chooseMonth = (month: number) => {
    if (month !== this.month) {
      this.month = month;
      this.pageChanged(1);
    }
  }

  public watchPage = () => {
    if (this.year === 0 && this.month === 0) {
      this.month = 1;
      this.watchPageByMonth(this.page, this.month);
    }

    if (this.year === 0 && this.month !== 0) {
      this.watchPageByMonth(this.page, this.month);
    }

    if (this.year !== 0 && this.month === 0) {
      this.watchPageByYear(this.page, this.year)
    }

    if (this.year !== 0 && this.month !== 0) {
      this.watchPageByYearAndMonth(this.page, this.year, this.month);
    }
  }

  public watchPageByYear = (page: number, year: number) => {
    let params = new HttpParams();
    params = params.append('page', page);
    params = params.append('year', year);
    params = params.append('pageDataCount', this.pageDataCount);

    this.http.get('https://localhost:7262/MoscowWeather/getByYear', {params: params})
    .subscribe({next: (response) => {
      this.data = (response as GetWeatherDataResponse).data!;
      this.config = {
        itemsPerPage: this.pageDataCount,
        currentPage: this.page,
        totalItems: (response as GetWeatherDataResponse).count!
      };
    }, error: (err: HttpErrorResponse) => {
      console.log(err);
    }});
  }

  public watchPageByMonth = (page: number, month: number) => {
    let params = new HttpParams();
    params = params.append('page', page);
    params = params.append('month', month);
    params = params.append('pageDataCount', this.pageDataCount);

    this.http.get('https://localhost:7262/MoscowWeather/getByMonth', {params: params})
    .subscribe({next: (response) => {
      this.data = (response as GetWeatherDataResponse).data!;
      this.config = {
        itemsPerPage: this.pageDataCount,
        currentPage: this.page,
        totalItems: (response as GetWeatherDataResponse).count!
      };
    }, error: (err: HttpErrorResponse) => {
      console.log(err);
    }});
  }

  public watchPageByYearAndMonth = (page: number, year: number, month: number) => {
    let params = new HttpParams();
    params = params.append('page', page);
    params = params.append('month', month);
    params = params.append('year', year);
    params = params.append('pageDataCount', this.pageDataCount);

    this.http.get('https://localhost:7262/MoscowWeather/getByYearAndMonth', {params: params})
    .subscribe({next: (response) => {
      this.data = (response as GetWeatherDataResponse).data!;
      this.config = {
        itemsPerPage: this.pageDataCount,
        currentPage: this.page,
        totalItems: (response as GetWeatherDataResponse).count!
      };
    }, error: (err: HttpErrorResponse) => {
      console.log(err);
    }});
  }

  public pageChanged = (page: any) => {
    this.page = page;
    this.config.currentPage = page;
    this.watchPage();
  }
}
