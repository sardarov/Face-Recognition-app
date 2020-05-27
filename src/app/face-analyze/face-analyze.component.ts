import { Component, OnInit, ViewChild } from '@angular/core';
import { FaceRecognitionService } from '../services/face-recognition.service'

@Component({
  selector: 'app-face-analyze',
  templateUrl: './face-analyze.component.html',
  styleUrls: ['./face-analyze.component.css']
})
export class FaceAnalyzeComponent implements OnInit {

  faceDetails: any;
  @ViewChild('mainImg') mainImg;
  public multiplier: number;

  constructor(private faceRecognitionService: FaceRecognitionService) { }

  ngOnInit(): void {
  }

  getPersonDetails(imageUrl){
    this.faceRecognitionService.detect(imageUrl).subscribe(data =>{
      this.faceDetails = data[0];
    });
  }

  imageLoaded($event) {
    this.faceDetails = [];
    let img = this.mainImg.nativeElement;
    this.multiplier = img.clientWidth / img.naturalWidth;
  }
}
