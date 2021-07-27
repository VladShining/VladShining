import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './component/education/education.component';
import { ResumeComponent } from './component/resume/resume.component';
import { SkillsComponent } from './component/skills/skills.component';
import { WorkComponent } from './component/work/work.component';
import { MainComponent } from './main/main.component';
const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', component: ResumeComponent },
      { path: 'education', component: EducationComponent },
      { path: 'skill', component: SkillsComponent },
      { path: 'work', component: WorkComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RootRoutingModule {}
