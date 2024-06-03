package com.gym.SpringBoot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Set;

import org.springframework.stereotype.Service;

import com.gym.SpringBoot.Entity.Role;
import com.gym.SpringBoot.Entity.User;
import com.gym.SpringBoot.Repository.RoleRepository;
import com.gym.SpringBoot.Repository.UserRepository;


@Service
public class UserService {
	
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private BCryptPasswordEncoder passwordEncoder;
    @Autowired
    private RoleRepository roleRepository;


    public User registerUser(User user, String roleName) {
    	if (user.getRoles() == null || user.getRoles().isEmpty()) {
            Role role = roleRepository.findByName(roleName);
            if (role != null) {
                user.setRoles(Collections.singleton(role));
            }
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setEnabled(false); // user needs to be enabled after email verification
        return userRepository.save(user);
    }
    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public User findById(Long userId) {
        return userRepository.findById(userId).orElse(null);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    public List<User> findAll() {
        return userRepository.findAll();
    }
    public User updateUser(Long id, User userDetails) {
        User user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
        user.setUsername(userDetails.getUsername());
        user.setEmail(userDetails.getEmail());
        if (!userDetails.getPassword().isEmpty()) {
            user.setPassword(passwordEncoder.encode(userDetails.getPassword()));
        }
        user.setEnabled(userDetails.isEnabled());
        user.setRoles(userDetails.getRoles());
        return userRepository.save(user);
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    public User save(User user) {
        return userRepository.save(user);
    }
}


