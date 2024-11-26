import { ChangeDetectionStrategy, Component, signal } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { Router } from "@angular/router";
import { ContainerCardComponent } from "../../../shared/components/container-card/container-card.component";
import { PortfolioEditorComponent } from "../../../shared/components/portfolio/portfolio-editor/portfolio-editor.component";
import { DataService } from "../../../shared/services/dataV2.service";

@Component({
  selector: "app-homepage-landing",
  standalone: true,
  imports: [
    ContainerCardComponent,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    PortfolioEditorComponent,
  ],
  templateUrl: "./homepage-landing.component.html",
  styleUrl: "./homepage-landing.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomepageLandingComponent {
  step = signal(0);

  constructor(private dataService: DataService, private router: Router) {
    if (!!this.dataService.sanityCheck()) {
      this.router.navigateByUrl("/main");
    }
  }

  setStep(index: number) {
    this.step.set(index);
  }

  nextStep() {
    this.step.update(i => i + 1);
  }

  prevStep() {
    this.step.update(i => i - 1);
  }

  handleOpenFile(event: any) {
    const selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const fileContent = (reader.result as string).split("\n");
      this.dataService.generatePortfolioDataFromUploadFile(fileContent);
    };
    reader.readAsText(selectedFile);
  }
}
