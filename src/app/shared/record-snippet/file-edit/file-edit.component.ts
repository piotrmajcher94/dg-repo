import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FileHeaderModel } from '../../file-header.model';
import { CitationType } from '../../citation-type';

@Component({
  selector: 'app-file-edit',
  templateUrl: './file-edit.component.html',
  styleUrls: ['./file-edit.component.css']
})
export class FileEditComponent implements OnInit {

  fileHeader: FileHeaderModel;
  @Input() file: File;
  // TODO change to input, doesnt make sense to emit an event here
  @Output() metadataAdded = new EventEmitter<{file: File, header: FileHeaderModel}>();

  constructor() {
    this.fileHeader = new FileHeaderModel();
  }

  ngOnInit() {
  }

  onSelectionChange(value: CitationType) {
    this.fileHeader.type = value;
  }

  onSaveMetadata() {
    this.metadataAdded.emit({file: this.file, header: this.fileHeader});
  }
}
