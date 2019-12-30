// NgModule es el decorador para indicarle a Angular que es un módulo personalizado
import { NgModule } from '@angular/core';

// Angular Material
import {MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';


// CommonModule contiene las directivas más utilizadas como ngfor, ngif, etc. 
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule
  ],
  exports:[
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule
  ]
})
export class MaterialModule { }
