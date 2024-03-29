import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TranslateModule } from '@ngx-translate/core';

import { MatIconModule } from '@angular/material/icon';

import { PepButtonModule } from '@pepperi-addons/ngx-lib/button';
import { PepSelectModule } from '@pepperi-addons/ngx-lib/select';
import { PepSelectPanelModule } from '@pepperi-addons/ngx-lib/select-panel';
import { PepRemoteLoaderModule } from '@pepperi-addons/ngx-lib/remote-loader';
import { PepDraggableItemsModule } from '@pepperi-addons/ngx-lib/draggable-items';
import { PepIconModule,PepIconRegistry, pepIconSystemMust} from '@pepperi-addons/ngx-lib/icon';
import { PepTextboxModule } from '@pepperi-addons/ngx-lib/textbox';
import { PepFieldTitleModule } from '@pepperi-addons/ngx-lib/field-title';
import { QuestionMenuModule } from '../question-menu/question-menu.module';
import { YesNoQuestionModule } from '../yes-no-question/yes-no-question.module';
import { PepTextareaModule } from '@pepperi-addons/ngx-lib/textarea';
import { PepDateModule } from '@pepperi-addons/ngx-lib/date';

const pepIcons = [
    pepIconSystemMust
];

import { YesNoQuestionComponent } from '../yes-no-question/yes-no-question.component';
import { QuestionGeneratorComponent } from './question-generator.component';
import { SequenceNumberModule } from '../sequence-number/sequence-number.module';
import { MatBadgeModule } from '@angular/material/badge';
import { ShowIfBadgeModule } from '../show-if-badge/show-if-badge.module';

@NgModule({
    declarations: [
        QuestionGeneratorComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        DragDropModule,
        PepButtonModule,        
        PepSelectModule,
        PepSelectPanelModule,
        PepRemoteLoaderModule,
        PepDraggableItemsModule,
        PepTextboxModule,
        PepTextareaModule,
        PepDateModule,
        PepIconModule,
        MatIconModule,
        PepFieldTitleModule,
        QuestionMenuModule,
        YesNoQuestionModule,
        SequenceNumberModule,
        ShowIfBadgeModule,
        MatBadgeModule,
        MatIconModule,
        TranslateModule.forChild()
    ],
    exports: [QuestionGeneratorComponent]
})
export class QuestionGeneratorModule { 
    constructor(
        private pepIconRegistry: PepIconRegistry,
        ) {
            this.pepIconRegistry.registerIcons(pepIcons);
        }
}

