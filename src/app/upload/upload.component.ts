import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Router } from '@angular/router';
import { UploadFilesResponse } from '../app.models';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  public uploadResults: any;
  @Output() public onUploadFinished = new EventEmitter();

  constructor(private http: HttpClient,
    private router: Router) {

  }

  ngOnInit(): void {
  }

  public onGeneral = () => {
    this.router.navigate(['/general']);
  }

  public uploadFile = (files: FileList | null) => {
    if(files == null || files.length === 0) return;

    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('file', files.item(i)!, files.item(i)!.name);
    }

    this.http.post('https://localhost:7262/MoscowWeather/Upload', formData, { reportProgress: true, observe: 'events' })
      .subscribe({next: (event) => {
        if (event.type === HttpEventType.Response) {
          this.uploadResults = event.body as UploadFilesResponse;
          this.onUploadFinished.emit(event.body);
          console.log(this.uploadResults);
        }
      }, error: (err: HttpErrorResponse) => console.log(err)
    });

    
  }
}
