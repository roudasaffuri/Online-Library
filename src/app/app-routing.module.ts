import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { BooksInLibraryComponent } from './books-in-library/books-in-library.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BooksOutOFLibraryComponent } from './books-out-oflibrary/books-out-oflibrary.component';
import { SettingsComponent } from './settings/settings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '',pathMatch:'full', component: HomePageComponent },
  { path: 'home-page', component:HomePageComponent },
  { path: 'books-in-library', component:BooksInLibraryComponent },
  { path: 'add-book', component:AddBookComponent },
  { path: 'books-out-oflibrary', component:BooksOutOFLibraryComponent },
  { path: 'books-out-oflibrary', component:BooksOutOFLibraryComponent },
  { path: 'settings', component:SettingsComponent },
  { path: '**', component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }