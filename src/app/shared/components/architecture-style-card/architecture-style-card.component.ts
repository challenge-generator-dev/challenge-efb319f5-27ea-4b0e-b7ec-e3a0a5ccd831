import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchitectureStyle } from '../../../core/models/architecture-style.model';

@Component({
  selector: 'app-architecture-style-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './architecture-style-card.component.html',
  styleUrls: ['./architecture-style-card.component.scss']
})
export class ArchitectureStyleCardComponent {
  @Input() styleData!: ArchitectureStyle;
  @Input() selected: boolean = false;
  @Output() selectStyle = new EventEmitter<string>();

  onSelect(): void {
    if (this.styleData?.id) {
      this.selectStyle.emit(this.styleData.id);
    }
  }

  getCloudSuitability(): string {
    if (!this.styleData) return 'N/A';
    const scenario = {
      expectedLoad: 1000,
      requiredAvailability: 99.9,
      isDistributed: true
    };
    return this.styleData.isSuitableForCloud(scenario) ? 'Alta' : 'Baja';
  }

  getCharacteristicsList(): string[] {
    if (!this.styleData?.characteristics) {
      return [];
    }
    return this.styleData.characteristics;
  }

  getAdvantagesList(): string[] {
    if (!this.styleData?.advantages) {
      return [];
    }
    return this.styleData.advantages;
  }

  getDisadvantagesList(): string[] {
    if (!this.styleData?.disadvantages) {
      return [];
    }
    return this.styleData.disadvantages;
  }

  trackByIndex(index: number): number {
    return index;
  }
}