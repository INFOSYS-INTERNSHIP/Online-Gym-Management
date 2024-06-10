package com.gym.SpringBoot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gym.SpringBoot.Entity.Membership;
import com.gym.SpringBoot.Entity.User;
import com.gym.SpringBoot.Repository.MembershipRepository;
import com.gym.SpringBoot.Repository.UserRepository;

@Service
public class MembershipService {

    @Autowired
    private MembershipRepository membershipRepository;

    @Autowired
    private UserRepository userRepository;

    public Membership createMembership(Long userId, Membership membershipDetails) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        membershipDetails.setUser(user);
        return membershipRepository.save(membershipDetails);
    }

    public List<Membership> getMembershipsByUserId(Long userId) {
        return membershipRepository.findByUserId(userId);
    }
}
