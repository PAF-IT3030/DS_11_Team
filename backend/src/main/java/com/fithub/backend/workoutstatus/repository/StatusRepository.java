package com.fithub.backend.workoutstatus.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.fithub.backend.workoutstatus.entity.Status;

public interface StatusRepository extends JpaRepository<Status, Integer> {
}