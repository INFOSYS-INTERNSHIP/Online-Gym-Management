package com.gym.SpringBoot.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.gym.SpringBoot.DTO.BookingRequest;
import com.gym.SpringBoot.Entity.Booking;
import com.gym.SpringBoot.exception.SlotUnavailableException;
import com.gym.SpringBoot.exception.UserNotFoundException;
import com.gym.SpringBoot.service.BookingService;


@RestController
@RequestMapping("/api/user/bookings")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @PostMapping("/create")
//    public ResponseEntity<Booking> createBooking(@RequestParam Long slotId, @RequestParam Long userId) {
//        Booking newBooking = bookingService.createBooking(slotId, userId);
//        return ResponseEntity.ok(newBooking);
//    }
    public ResponseEntity<String> bookSlot(@RequestBody BookingRequest bookingRequest) {
        try {
            bookingService.bookSlot(bookingRequest.getSlotId(), bookingRequest.getUserId());
            return ResponseEntity.ok("Slot booked successfully.");
        } catch (SlotUnavailableException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Slot is unavailable.");
        } catch (UserNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while booking the slot.");
        }
    }
}




