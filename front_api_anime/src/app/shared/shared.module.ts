import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

const importedAndExportedModule = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
];

@NgModule({
   
    imports: [...importedAndExportedModule],
    exports: [...importedAndExportedModule],
    providers: []

})

export class SharedModule { }
