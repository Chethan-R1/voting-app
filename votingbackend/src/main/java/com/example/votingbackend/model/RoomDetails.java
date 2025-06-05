package com.example.votingbackend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor        // needed for deserialization (e.g., in POST)
@AllArgsConstructor       // needed for your new RoomDetails(...) call
public class RoomDetails {
    private String roomName;
    private int roomId;
    private String storyId;
    private String votingType;
}
