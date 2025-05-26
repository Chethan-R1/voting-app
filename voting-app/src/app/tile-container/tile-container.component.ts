import { Component } from '@angular/core';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-tile-container',
  standalone: false,
  templateUrl: './tile-container.component.html',
  styleUrl: './tile-container.component.css'
})
export class TileContainerComponent {

  selectedStory: string = '';
  selectedItem: any = null;

  roomIds = ['101', '102', '103', '104', '105', '106', '107', '108'];


  constructor(private service: RoomService) {}

 onRoomIdClick(roomId: string): void {
  this.service.roomservice(roomId).subscribe(
    (response: any) => {
      this.selectedItem = response;
     
      console.log('Fetched Room:', response);
    },
    (error) => {
      console.error('Error fetching room:', error);
    }
  );
}

}
