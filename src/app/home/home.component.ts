

// import { Component, OnInit } from '@angular/core';
// import { ServiceApiService } from '../service-api.service';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit {
//   allRecipes: any[] = [];

//   constructor(private recipeService: ServiceApiService) { }

//   ngOnInit(): void {
//     this.viewApp()

//   }

//   viewApp(){
//     this.recipeService.getRecipes().subscribe({
//       next:(res:any)=>{
//         console.log(res);
//         this.allRecipes=res
        
//       },error:(err:any)=>{
//         console.log(err.message);
        
//       }
//     })
//   }

 
// }



import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from '../service-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allRecipes: any[] = [];

  constructor(private recipeService: ServiceApiService) { }

  ngOnInit(): void {
    this.viewApp();
  }

  viewApp(): void {
    this.recipeService.getRecipes().subscribe({
      next: (res: any) => {
        if (Array.isArray(res?.recipes)) { // Check if 'recipes' property exists and is an array
          this.allRecipes = res.recipes;
        } else {
          console.error('Invalid data format:', res);
        }
      },
      error: (err: any) => {
        console.error('Error fetching recipes:', err.message);
      }
    });
  }
}
