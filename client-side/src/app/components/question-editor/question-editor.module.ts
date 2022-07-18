import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PepButtonModule } from '@pepperi-addons/ngx-lib/button';
import { PepRemoteLoaderModule } from '@pepperi-addons/ngx-lib/remote-loader';

import { PepDraggableItemsModule } from '@pepperi-addons/ngx-lib/draggable-items';


import { QuestionEditorComponent } from './question-editor.component';
import { QuestionSelectOptionsModule } from '../select-options/select-options.module';
import { PepNgxLibModule, PepAddonService } from '@pepperi-addons/ngx-lib';
import { PepIconRegistry, pepIconSystemFilter2} from '@pepperi-addons/ngx-lib/icon';
import { PepTextboxModule } from '@pepperi-addons/ngx-lib/textbox';
import { PepTextareaModule } from '@pepperi-addons/ngx-lib/textarea';
import { PepCheckboxModule } from '@pepperi-addons/ngx-lib/checkbox';

import { TranslateLoader, TranslateModule, TranslateService, TranslateStore } from '@ngx-translate/core';
import { config } from '../addon.config';

const pepIcons = [
    pepIconSystemFilter2
];

@NgModule({
    declarations: [
        QuestionEditorComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        DragDropModule,
        PepButtonModule,
        PepRemoteLoaderModule,
        PepDraggableItemsModule,
        QuestionSelectOptionsModule,
        PepTextboxModule,
        PepTextareaModule,
        PepCheckboxModule,
        TranslateModule.forChild(),
    ],
    exports: [QuestionEditorComponent]
})
export class QuestionEditorModule { 

constructor(
    translate: TranslateService,
    private pepIconRegistry: PepIconRegistry,
    private pepAddonService: PepAddonService
    ) {
        this.pepAddonService.setDefaultTranslateLang(translate);
        this.pepIconRegistry.registerIcons(pepIcons);
    }
}