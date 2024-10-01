package com.redeaglesoftware.hk_api.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("${base.path}")
public class HealthController {
    @GetMapping
    public ResponseEntity<String> healthcheck() {
        return ResponseEntity.ok("Healthy");
    }
}
