package com.example.votingbackend.service;

import com.example.votingbackend.model.RoomDetails;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RoomService {

    private final List<RoomDetails> rooms = new ArrayList<>();

    public RoomService() {
        rooms.add(new RoomDetails("Room A", 101, "S001", "Fibonacci"));
        rooms.add(new RoomDetails("Room B", 102, "S002", "Binary"));
        rooms.add(new RoomDetails("Room C", 103, "S003", "QuickSort"));
        rooms.add(new RoomDetails("Room D", 104, "S004", "MergeSort"));
        rooms.add(new RoomDetails("Room E", 105, "S005", "BubbleSort"));
        rooms.add(new RoomDetails("Room F", 106, "S006", "Graph Theory"));
        rooms.add(new RoomDetails("Room G", 107, "S007", "DP"));
        rooms.add(new RoomDetails("Room H", 108, "S008", "Greedy"));
    }

    public List<RoomDetails> fetchAllRoomDetails() {
        return rooms;
    }

    public RoomDetails getRoomById(int roomId) {
        return rooms.stream()
                .filter(room -> room.getRoomId() == roomId)
                .findFirst()
                .orElse(null);
    }

    public void updateRoomDetails(RoomDetails roomDetails) {
    }
}