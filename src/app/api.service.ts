import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }

  getUsers = () => {
     return this.http.get('https://jensjorisdecorte-backend-example-5.glitch.me/users');   
    
  }


  
  AddUser = (name:string) => {
     let nameEncoded=encodeURIComponent(name);
    let URI1= encodeURI('https://jensjorisdecorte-backend-example-5.glitch.me/add?name=')+nameEncoded;
    return this.http.get(URI1);


  }

  AddNote = (name:string, note:string) => {
    
    
    
    let URI2=encodeURI('https://jensjorisdecorte-backend-example-5.glitch.me/addnote?name=');
    let nameEncoded=encodeURIComponent(name);
    console.log("naam: "+nameEncoded);

    let URI3=encodeURI('&content=');
    let noteEncoded=encodeURIComponent(note);
    console.log("NoteEncoded: "+noteEncoded);

    let encodedUri=URI2 + nameEncoded + URI3 + noteEncoded;
    console.log(encodedUri)
    return this.http.get(encodedUri);

   }

  DeleteUserNote = (name:string) => {
    let nameEncoded=encodeURIComponent(name);
    let encodedUri= encodeURI('https://jensjorisdecorte-backend-example-5.glitch.me/remove?name=')+nameEncoded;
    return this.http.get(encodedUri);
    

  }

  GetNotes = (name:string) => {

    let nameEncoded=encodeURIComponent(name);
    let encodedUri= encodeURI('https://jensjorisdecorte-backend-example-5.glitch.me/notes?name=')+nameEncoded;
    return this.http.get(encodedUri);

  }
}
