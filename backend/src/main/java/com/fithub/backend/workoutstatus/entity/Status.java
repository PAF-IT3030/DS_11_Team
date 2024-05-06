package com.fithub.backend.workoutstatus.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "status")
public class Status {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int statusId;

    private String type;
    private String time;
    private int userId;
    private String userName;
    private String userImg;

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> images;

    @Column(columnDefinition = "LONGTEXT")
    private String content;

    private int likeCount;
    private int commentCount;

    // Remove the @OneToMany mapping for comments
    // You'll need to manage the comments separately
}