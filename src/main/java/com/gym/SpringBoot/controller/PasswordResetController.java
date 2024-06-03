package com.gym.SpringBoot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.gym.SpringBoot.Entity.PasswordResetToken;
import com.gym.SpringBoot.Entity.User;
import com.gym.SpringBoot.service.PasswordResetService;
import com.gym.SpringBoot.service.UserService;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/auth")
public class PasswordResetController {

    @Autowired
    private PasswordResetService passwordResetService;

    @Autowired
    private UserService userService;

    @PostMapping("/reset-password")
    public ResponseEntity<String> resetPassword(@RequestBody String email) {
        User user = userService.findByEmail(email);
        if (user == null) {
            return ResponseEntity.badRequest().body("Invalid email address");
        }
        passwordResetService.sendPasswordResetEmail(user);
        return ResponseEntity.ok("Password reset email sent. Please check your email.");
    }

    @PostMapping("/change-password")
    public ResponseEntity<String> changePassword(@RequestParam("token") String token, @RequestBody String newPassword) {
        PasswordResetToken resetToken = passwordResetService.getPasswordResetToken(token);
        if (resetToken == null) {
            return ResponseEntity.badRequest().body("Invalid token");
        }

        User user = resetToken.getUser();
        passwordResetService.resetPassword(user, newPassword);
        return ResponseEntity.ok("Password changed successfully");
    }
}
