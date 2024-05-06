package com.fithub.backend.workoutstatus.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
// import com.fithub.backend.entity.Post;
import com.fithub.backend.workoutstatus.entity.Status;
// import com.fithub.backend.repository.PostRepository;
import com.fithub.backend.workoutstatus.repository.StatusRepository;
import java.util.List;

@Service
public class StatusService {
    @Autowired
    private StatusRepository repository;

    public Status saveStatus(Status status) {
        return repository.save(status);
    }

    public List<Status> saveStatus(List<Status> statuses) {
        return repository.saveAll(statuses);
    }

    public List<Status> getStatuses() {
        return repository.findAll(Sort.by(Sort.Direction.DESC, "time"));
    }

    public Status getStatusById(int id) {
        return repository.findById(id).orElse(null);
    }

    public String deleteStatus(String id) {
        int statusId = Integer.parseInt(id);
        repository.deleteById(statusId);
        return "status removed !! " + statusId;
    }

    public Status updateStatus(Status status) {
        Status existingStatus = repository.findById(status.getStatusId()).orElse(null);
        return repository.save(existingStatus);
    }
}