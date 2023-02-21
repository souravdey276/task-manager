import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from './project';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private url: string = 'http://localhost:9090/api/projects';
  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {



    return this.http.get<Project[]>(this.url)
      .pipe(
        map(
          (data: Project[]) => {
            // for (let index = 0; index < data.length; index++) {
            //   // data[index].teamSize = data[index].teamSize * 100;

            // }
            return data;
          }
        )
      )
  }

  createProject(project: Project): Observable<Project> {


    return this.http.post<Project>(this.url, project);
  }

  updateProject(existingProject: Project): Observable<Project> {


    return this.http.put<Project>(this.url, existingProject);
  }

  deleteProject(projectId: number): Observable<Project> {


    return this.http.delete<Project>(this.url + '?ProjectID=' + projectId);
  }

  searchProject(searchBy: string, searchText: string): Observable<Project[]> {


    return this.http.get<Project[]>(`${this.url}/search/${searchBy}/${searchText}`);
  }

  getProjectByProjectId(projectId: number): Observable<Project> {
    return this.http.get<Project>(`${this.url}/searchbyprojectid/${projectId}`);
  }

}