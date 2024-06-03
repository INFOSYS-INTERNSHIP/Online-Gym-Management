package com.gym.SpringBoot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.gym.SpringBoot.DTO.UserRegistrationRequest;
import com.gym.SpringBoot.Entity.User;
import com.gym.SpringBoot.service.UserService;
import com.gym.SpringBoot.service.VerificationTokenService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/auth")
public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private VerificationTokenService verificationTokenService;
    
    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody UserRegistrationRequest userRegistrationRequest) {
        if (userService.findByEmail(userRegistrationRequest.getEmail()) != null) {
            return ResponseEntity.badRequest().body("Email already in use");
        }
        User user = new User();
        user.setUsername(userRegistrationRequest.getUsername());
        user.setEmail(userRegistrationRequest.getEmail());
        user.setPassword(userRegistrationRequest.getPassword());
        User registeredUser = userService.registerUser(user, userRegistrationRequest.getRole());
        verificationTokenService.sendVerificationEmail(registeredUser);
        return ResponseEntity.ok("User registered successfully. Please check your email to verify your account.");
    }
    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleExceptions(Exception e) {
        return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
}

