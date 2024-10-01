package com.redeaglesoftware.hk_api.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hk-staging")
public class HelloController {
    @GetMapping
    public ResponseEntity<String> hello() {
        return ResponseEntity.ok("Hello World!");
    }
}
