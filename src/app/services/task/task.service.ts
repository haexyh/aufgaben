import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {ITaskInfo} from "../../types/tasks/ITaskInfo";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private readonly endpoint = 'https://smino.api/issues';

  constructor(private httpClient: HttpClient) {
  }

  getTasksByProject(id: number): Observable<ITaskInfo[]> {


  }
}
