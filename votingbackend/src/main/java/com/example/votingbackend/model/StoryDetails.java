package com.example.votingbackend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class StoryDetails {
    private int planId;
    private String StoryDesc;
    private String storyNo;

}
