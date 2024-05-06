package com.fithub.backend.workoutstatus.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fithub.backend.workoutstatus.entity.StatusFile;

public interface StatusFileRepository extends JpaRepository<StatusFile, Integer> {
    Optional<StatusFile> findByFileName(String fileName);
}
