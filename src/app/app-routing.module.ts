import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainingComponent } from './training/training.component';
import { FaceAnalyzeComponent } from './face-analyze/face-analyze.component';


const routes: Routes = [
  { path: '', component: FaceAnalyzeComponent},
  { path: 'training', component: TrainingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
