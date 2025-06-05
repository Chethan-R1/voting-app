package com.example.votingbackend.controller;

import com.example.votingbackend.model.User;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    private final List<User> users = new ArrayList<>();

    @PostMapping("/register")
    public String register(@RequestBody User newUser) {
        // Check if user already exists
        for (User user : users) {
            if (user.getUsername().equals(newUser.getUsername())) {
                return "User already exists";
            }
        }
        users.add(newUser);
        return "User registered successfully";
    }

    @PostMapping("/login")
    public String login(@RequestBody User loginUser) {
        for (User user : users) {
            if (user.getUsername().equals(loginUser.getUsername())
                    && user.getPassword().equals(loginUser.getPassword())) {
                return "Login successful";
            }
        }
        return "Invalid credentials";
    }
}
