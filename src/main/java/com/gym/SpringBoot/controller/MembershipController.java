package com.gym.SpringBoot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gym.SpringBoot.Entity.Membership;
import com.gym.SpringBoot.service.MembershipService;

@RestController
@RequestMapping("/api/memberships")
@CrossOrigin(origins = "http://localhost:4200")
public class MembershipController {
    @Autowired
    private MembershipService membershipService;

    @PostMapping
    public ResponseEntity<Membership> createMembership(@RequestParam Long userId, @RequestBody Membership membership) {
        Membership createdMembership = membershipService.createMembership(userId, membership);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdMembership);
    }
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Membership>> getMembershipsByUserId(@PathVariable Long userId) {
        List<Membership> memberships = membershipService.getMembershipsByUserId(userId);
        return ResponseEntity.ok(memberships);
    }
}

