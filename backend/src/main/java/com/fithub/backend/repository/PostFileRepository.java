package com.fithub.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fithub.backend.entity.PostFile;

public interface PostFileRepository extends JpaRepository<PostFile, Integer> {
    Optional<PostFile> findByFileName(String fileName);
}
