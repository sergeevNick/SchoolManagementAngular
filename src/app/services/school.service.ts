import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { HttpParamsOptions } from '@angular/common/http/src/params';
import { environment } from '../../environments/environment';


@Injectable()
export class SchoolService {

  httpOptions: { headers: HttpHeaders };

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  getGrades() {
    const promise = new Promise((resolve, reject) => {
      const apiURL = environment.urls.api + '/grades/';
      this.http.get(apiURL)
        .toPromise()
        .then(
          (res: any) => { // Success
            resolve(res);
          },
          msg => {
            reject();
          }
        );
    });
    return promise;
  }

  getStudents(gradeId) {
    const promise = new Promise((resolve, reject) => {
      const apiURL = environment.urls.api + '/grades/' + gradeId + '/students';
      this.http.get(apiURL)
        .toPromise()
        .then(
          (res: any) => { // Success
            resolve(res);
          },
          msg => {
            reject();
          }
        );
    });
    return promise;
  }

  getSubjects(gradeId) {
    const promise = new Promise((resolve, reject) => {
      const apiURL = environment.urls.api + '/grades/' + gradeId + '/subjects';
      this.http.get(apiURL)
        .toPromise()
        .then(
          (res: any) => { // Success
            resolve(res);
          },
          msg => {
            reject();
          }
        );
    });
    return promise;
  }

  getMarks(studentId, subjectId) {
    const promise = new Promise((resolve, reject) => {
      const apiURL = environment.urls.api + '/marks/students/' + studentId + '/subjects/' + subjectId;
      this.http.get(apiURL)
        .toPromise()
        .then(
          (res: any[]) => {
            resolve(res);
          },
          msg => {
            reject();
          }
        )
    })
    return promise;
  }

  addMark(studentId, subjectId, value) {
    let body = JSON.stringify({ 'value': value });
    const promise = new Promise((resolve, reject) => {
      const apiURL = environment.urls.api + 'marks/students/' + studentId + '/subjects/' + subjectId;
      this.http.post(apiURL, body, this.httpOptions)
        .toPromise()
        .then((res: any[]) => {
          resolve(res);
        },
          msg => {
            reject();
          })
        .catch(this.handleErrorPromise)
    })
    return promise;
  }

  deleteMark(markId) {
    const promise = new Promise((resolve, reject) => {
      const apiURL = environment.urls.api + '/marks/' + markId;
      this.http.delete(apiURL)
        .toPromise()
        .then((res: any[]) => {
          resolve(res);
        },
          msg => {
            reject();
          })
        .catch(this.handleErrorPromise)
    })
    return promise;
  }

  getSchedule(gradeId) {
    const promise = new Promise((resolve, reject) => {
      const apiURL = environment.urls.api + '/grades/' + gradeId + '/schedule';
      this.http.get(apiURL)
        .toPromise()
        .then(
          (res: any[]) => {
            resolve(res);
          },
          msg => {
            reject();
          }
        )
    })
    return promise;
  }



  private extractData(res: Response) {
    console.log('result ', res);
    return res || {};
  }

  private handleErrorPromise(error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }
}
