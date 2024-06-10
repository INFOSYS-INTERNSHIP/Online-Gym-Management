package com.gym.SpringBoot.component;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import com.gym.SpringBoot.Entity.Role;
import com.gym.SpringBoot.Repository.RoleRepository;

@Component
public class RoleInitializer implements ApplicationRunner {
//	"username": "admin1",
//    "email": "admin1@example.com",
//    "password": "securepassword123",
//    "role": "ADMIN"
//
//    "username": "user1",
//    "email": "user2@example.com",
//    "password": "securepassword123",
//    "role": "USER"
    @Autowired
    private RoleRepository roleRepository;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        initializeRoles();
    }

    private void initializeRoles() {
        Role trainerRole = roleRepository.findByName("TRAINER");
        if (trainerRole == null) {
            trainerRole = new Role();
            trainerRole.setName("TRAINER");
            roleRepository.save(trainerRole);
        }

        Role adminRole = roleRepository.findByName("ADMIN");
        if (adminRole == null) {
            adminRole = new Role();
            adminRole.setName("ADMIN");
            roleRepository.save(adminRole);
        }
        if (roleRepository.findByName("USER") == null) {
            Role userRole = new Role();
            userRole.setName("USER");
            roleRepository.save(userRole);
        }
    }
}

