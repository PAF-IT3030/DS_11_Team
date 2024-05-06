package com.fithub.backend.workoutstatus.entity;

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
@Table(name = "status_file")
public class StatusFile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int fileId;
    private String fileName;

    @ManyToOne
    @JoinColumn(name = "statusId", nullable = false)
    private Status status;

    private String type;
    private String filePath;
}