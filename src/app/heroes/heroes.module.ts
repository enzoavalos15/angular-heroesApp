import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//flex layout
import { FlexLayoutModule } from '@angular/flex-layout';

//material
import { MaterialModule } from '../material/material.module';

//ruteo
import { HeroesRoutingModule } from './heroes-routing.module';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HeroeCardComponent } from './components/heroe-card/heroe-card.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { DialogComponent } from './components/dialog/dialog.component';


@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    HeroeComponent,
    HomeComponent,
    ListadoComponent,
    HeroeCardComponent,
    ImagenPipe,
    DialogComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule
  ]
})
export class HeroesModule { }
