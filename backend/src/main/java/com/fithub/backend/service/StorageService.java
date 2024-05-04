package com.fithub.backend.service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.fithub.backend.entity.Post;
import com.fithub.backend.entity.PostFile;
import com.fithub.backend.repository.PostFileRepository;
import com.fithub.backend.repository.PostRepository;

@Service
public class StorageService {
    @Autowired
    private PostFileRepository fileDataRepository;

    @Autowired
    private PostRepository postRepository;

    private final String FOLDER_PATH = "C:\\Users\\duudi\\OneDrive\\Pictures\\project";

    public String uploadImageToFileSystem(MultipartFile file, int postId) throws IOException {
        String originalFilename = file.getOriginalFilename();
        String extension = originalFilename != null ? originalFilename.substring(originalFilename.lastIndexOf("."))
                : "";
        String newFileName = UUID.randomUUID().toString() + "_" + postId + extension;
        String filePath = FOLDER_PATH + newFileName;

        // Fetch the Post object from the database using the postId
        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new IllegalArgumentException("Invalid post Id:" + postId));

        // Add the new image's file name to the images list
        post.getImages().add(newFileName);
        postRepository.save(post);

        PostFile fileData = fileDataRepository.save(PostFile.builder()
                .post(post)
                .fileName(newFileName)
                .type(file.getContentType())
                .filePath(filePath).build());

        file.transferTo(new File(filePath));

        if (fileData != null) {
            return "file uploaded successfully : " + filePath;
        }
        return null;
    }

    public byte[] downloadImageFromFileSystem(String fileName) throws IOException {
        Optional<PostFile> fileData = fileDataRepository.findByFileName(fileName);
        String filePath = fileData.get().getFilePath();
        byte[] images = Files.readAllBytes(new File(filePath).toPath());
        return images;
    }

}
