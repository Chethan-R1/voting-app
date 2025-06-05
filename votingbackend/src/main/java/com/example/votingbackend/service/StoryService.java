package com.example.votingbackend.service;
import com.example.votingbackend.model.StoryDetails;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class StoryService {
    private final List<StoryDetails> story = new ArrayList<>();

    public StoryService() {
        story.add(new StoryDetails( 1, "StoryDescription", "S01"));
        story.add(new StoryDetails( 2, "StoryDescription_2", "S02"));
    }

    public List<StoryDetails> fetchAllStoryDetails() {
        return story;
    }

    public StoryDetails getStoryById(int planId) {
        return story.stream()
                .filter(room -> room.getPlanId() == planId)
                .findFirst()
                .orElse(null);
    }

    public void updateStoryDetails(StoryDetails roomDetails) {
    }
}

