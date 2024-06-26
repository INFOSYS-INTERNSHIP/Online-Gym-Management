package com.gym.SpringBoot.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gym.SpringBoot.Entity.Trainer;

@Repository
public interface TrainerRepository extends JpaRepository<Trainer, Long> {
}
