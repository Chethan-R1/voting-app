package com.example.votingbackend.controller;

import com.example.votingbackend.model.RoomDetails;
import com.example.votingbackend.model.StoryDetails;
import com.example.votingbackend.service.RoomService;
import com.example.votingbackend.service.StoryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class StoryController {
    private final StoryService storyService;

    public StoryController(StoryService storyService) {
        this.storyService = storyService;
    }


    @GetMapping("/story-details")
    public List<StoryDetails> getAllStoryDetails() {
        return storyService.fetchAllStoryDetails();
    }

    @GetMapping("/story-details/{id}")
    public StoryDetails getStoryById(@PathVariable int id) {
        return storyService.getStoryById(id);
    }

    @PostMapping("/story-details")
    public ResponseEntity<String> receiveRoomDetails(@RequestBody StoryDetails storyDetails) {
        storyService.updateStoryDetails(storyDetails);
        return ResponseEntity.ok("Story details updated successfully.");
    }
}
