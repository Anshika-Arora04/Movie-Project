import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { NotifierService } from '../services/notifier.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})

export class AddMovieComponent implements OnInit {

  genreList: string[] = ['Action', 'Comedy', 'Romance', 'Biography', 'Sci-Fi', 'Fantasy', 'Drama', 'Horror', 'Mystery', 'Thriller'];

  imageUrl: string = '';
  file!: any;
  fileName: string = "No file selected";
  formNotSubmitted: boolean = false;
  public movieForm!: FormGroup;

  get Error() {
    return this.movieForm.controls;
  }


  ngOnInit(): void {

  }

  constructor(private formBuilder: FormBuilder, private route: Router,
    private movieService: MovieService, private notifier: NotifierService) {

    this.movieForm = this.formBuilder.group({
      movieName: ['', [Validators.required, Validators.maxLength(50)]],
      directorName: ['', [Validators.required, Validators.minLength(3)]],
      writerName: ['', [Validators.required, Validators.minLength(3)]],
      zoner: [''],
      description: ['', [Validators.required, Validators.maxLength(600)]],
      releaseDate: ['', Validators.required],
      imageUrl: ['', Validators.required],
      rating: ['']
    });
  }
  // From this function we get the fetched url to store
  onImageUrlPaste(event: any) {
    this.imageUrl = this.movieForm.get("imageUrl").value;
  }

  onSubmit() {
    if (this.movieForm.valid) {
      console.log(this.movieForm.value)
      this.movieService.createMovie(this.movieForm.value)
      console.log("successfull");
      this.notifier.showNotification("Movie is created", "Ok");
      this.route.navigate(["/show-movie"]);
      this.movieForm.reset();
    } else {
      this.formNotSubmitted = true;
      this.notifier.showNotification("Something went wrong.", "Dismiss");
    }
  }
}
