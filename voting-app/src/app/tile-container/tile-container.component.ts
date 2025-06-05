import { Component } from '@angular/core';
import { RoomService, Vote } from '../room.service';

@Component({
  selector: 'app-tile-container',
  standalone: false,
  templateUrl: './tile-container.component.html',
  styleUrl: './tile-container.component.css'
})
export class TileContainerComponent {
  votingList: Vote[] = [];
  roomIds = ['1', '2', '3', '5', '8', '13', '21', '34'];
  selectedRooms: any[] = []; // ✅ Store all selected rooms
selectedStory: any;
selectedItem: any;

  constructor(private service: RoomService) {}

  onRoomIdClick(roomId: string): void {
  this.service.roomservice(roomId).subscribe(
    (response: any) => {
      const alreadySelected = this.selectedRooms.find(r => r.roomId === response.roomId);
      if (!alreadySelected) {
        this.selectedRooms.push(response); 
        console.log('Room selected:', response);
      }
      this.selectedItem = response;
      this.selectedStory = response.storyId;
    },
    (error) => {
      console.error('Error fetching room:', error);
    }
  );
}

  startVoting(): void {
    if (this.selectedRooms.length === 0) {
      console.warn('No rooms selected to vote.');
      return;
    }

    this.selectedRooms.forEach((room) => {
      const dummyVote: Vote = {
        userId: 'user' + Math.floor(Math.random() * 100), 
        roomId: room.roomId,
        storyId: room.storyId,
        roomName: room.roomName
      };

      this.service.submitVote(dummyVote).subscribe(
        () => console.log('Vote submitted:', dummyVote),
        err => console.error('Error submitting vote:', err)
      );
    });

    // Optional: clear after voting
    // this.selectedRooms = [];
  }

  stopVoting(): void {
    this.service.getAllVotes().subscribe(
      (data) => {
        this.votingList = data;
      },
      (error) => {
        console.error('Error fetching votes:', error);
      }
    );
  }

  clearVotes(): void {
  this.service.clearVotes().subscribe(
    () => {
      console.log('Votes cleared');
      this.votingList = []; // Clear frontend display
      this.selectedRooms = []; // Optional: clear room selection if you're using it
    },
    (error) => {
      console.error('Error clearing votes:', error);
    }
  );
}

}