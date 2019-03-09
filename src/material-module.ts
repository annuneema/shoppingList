import { NgModule } from '@angular/core';
import { 
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule
} from '@angular/material';
@NgModule({
    exports:[
        MatIconModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatGridListModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatSelectModule
    ]
})

export class MaterialModule {
    constructor(){}
}