import { Component, OnInit } from '@angular/core';
import { FaceRecognitionService } from '../services/face-recognition.service'
import * as _ from 'lodash';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  public personGroups = [];
  selectedGroup;
  selectedGroupId;
  
  constructor(private faceRecognotionService: FaceRecognitionService) { }

  ngOnInit(): void {
    this.faceRecognotionService.getPersonGroups().subscribe(data => this.personGroups = data);
  }

  onSelectGroup(group): void {
    this.selectedGroup = group;
    this.selectedGroupId = group.personGroupId;
  }

  deletePersonGroup() {
    this.faceRecognotionService.deletePersonGroup(this.selectedGroup.personGroupId).subscribe(() => {
      _.remove(this.personGroups, x => x.personGroupId === this.selectedGroup.selectedGroupId);
      this.selectedGroup = null;
    });
  }

  addPersonGroup(groupName: string){
      let newPersonGroup = { personGroupId: _.kebabCase(groupName), name: groupName };
      this.faceRecognotionService.createPersonGroup(newPersonGroup).subscribe(data => {
        this.personGroups.push(newPersonGroup);
        this.selectedGroupId = newPersonGroup.personGroupId;
      });
  }

  onGroupsChange() {

  }
}
