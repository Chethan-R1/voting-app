// src/main/java/com/example/votingbackend/controller/RoomController.java
package com.example.votingbackend.controller;

import com.example.votingbackend.model.RoomDetails;
import com.example.votingbackend.service.RoomService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200") // Angular access
public class RoomController {

    private final RoomService roomService;

    public RoomController(RoomService roomService) {
        this.roomService = roomService;
    }


    @GetMapping("/room-details")
    public List<RoomDetails> getAllRoomDetails() {
        return roomService.fetchAllRoomDetails();
    }

    @GetMapping("/room-details/{id}")
    public RoomDetails getRoomById(@PathVariable int id) {
        return roomService.getRoomById(id);
    }

    @PostMapping("/room-details")
    public ResponseEntity<String> receiveRoomDetails(@RequestBody RoomDetails roomDetails) {
        roomService.updateRoomDetails(roomDetails);
        return ResponseEntity.ok("Room details updated successfully.");
    }
}
