package com.fithub.backend.workoutstatus.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.fithub.backend.workoutstatus.entity.Status;
import com.fithub.backend.workoutstatus.service.StatusService;
import java.util.List;

@RestController
public class StatusController {
    @Autowired
    private StatusService service;

    @PostMapping("/status")
    public Status addStatus(@RequestBody Status status) {
        return service.saveStatus(status);
    }

    @GetMapping("/statuses")
    public List<Status> findAllStatuses() {
        return service.getStatuses();
    }

    @GetMapping("/status/id/{id}")
    public Status findStatusById(@PathVariable int id) {
        return service.getStatusById(id);
    }

    @PutMapping("/status")
    public Status updateStatus(@RequestBody Status status) {
        return service.updateStatus(status);
    }

    @DeleteMapping("/status/{id}")
    public String deleteStatus(@PathVariable String id) {
        return service.deleteStatus(id);
    }
}