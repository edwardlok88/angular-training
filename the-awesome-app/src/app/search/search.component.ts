import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable, ReplaySubject, Subject, interval } from 'rxjs';
import { filter, map, take, tap, debounceTime } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  public formGroup: FormGroup;
  public results: Array<string> = [];
  public results$!: Observable<Array<string>>;

  constructor(private httpClient: HttpClient) {
    //interval create an observable with an infinite sequence of numbers
    //subcribe to get the output
    interval(1000)
      .pipe(
        take(10), // to pick the first 10
        tap(value => console.log("in tap", value)), // view the value
        filter(v => v % 2 === 0), // arrow function
        // filter(function(v) { // normal function
        //   return v % 2 === 0;
        // }),
        map(v => v * v)
      )
      // .subscribe((result) => {
      //   console.log("in subscribe", result); // output
      // });

    this.formGroup = new FormGroup({
      search: new FormControl("", [], [])
    });

    this.formGroup
      .get("search")
      ?.valueChanges
      .pipe(
        debounceTime(1000)
      )
      .subscribe(input => {
        // console.log("input", input);
        const url = "https://en.wikipedia.org/w/api.php";
        const params = new HttpParams()
          .set("action", "opensearch")
          .set("limit", 20)
          .set("origin", "*")
          .set("search", input);
        // observe: response to observe the response message
        // httpClient.get(url, {params, observe: 'response'})
        //           .subscribe((data) => {
        //             console.log(data);
        //           })

        httpClient.get<Array<any>>(url, { params, observe: 'body' })
          .pipe(
            map(data => data[1])
          )
          .subscribe((data) => {
            console.log(data);
            this.results = data;
          })

        // observable subscribe in html
        this.results$ = httpClient.get<Array<any>>(url, { params, observe: 'body' })
          .pipe(
            map(data => data[1])
          )
      })

      // const subject = new Subject<number>();
      // const subject = new ReplaySubject<number>();
      const subject = new BehaviorSubject<number>(0);

      subject.subscribe((result) => {
        console.log("subscriber #1", result)
      });

      subject.next(10);
      subject.next(20);
      subject.next(30);

      subject.subscribe((result) => {
        console.log("subscriber #2", result)
      });

      subject.next(40);
      subject.next(50);
  }
}
