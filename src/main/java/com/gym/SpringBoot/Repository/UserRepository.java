package com.gym.SpringBoot.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.gym.SpringBoot.Entity.User;

import java.util.Optional;
@Repository
public interface UserRepository extends JpaRepository<User, Long> {	
	 User findByEmail(String email);
	    User findByUsername(String username);
	    @Query("SELECT u FROM User u WHERE u.username = :username")
	    User getUserByUsername(@Param("username") String username);
}
