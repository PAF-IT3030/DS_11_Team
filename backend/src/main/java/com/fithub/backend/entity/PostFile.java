package com.fithub.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
@Table(name = "post_file")
public class PostFile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int fileId;
    private String fileName;

    @ManyToOne
    @JoinColumn(name = "postId", nullable = false)
    private Post post;

    private String type;
    private String filePath;
}