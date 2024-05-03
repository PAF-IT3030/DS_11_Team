package com.fithub.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import com.fithub.backend.entity.Post;
import com.fithub.backend.repository.PostRepository;
import java.util.List;

@Service
public class PostService {
    @Autowired
    private PostRepository repository;

    public Post savePost(Post post) {
        return repository.save(post);
    }

    public List<Post> savePosts(List<Post> posts) {
        return repository.saveAll(posts);
    }

    public List<Post> getPosts() {
        return repository.findAll(Sort.by(Sort.Direction.DESC, "time"));
    }

    public Post getPostById(int id) {
        return repository.findById(id).orElse(null);
    }

    public String deletePost(String id) {
        int postId = Integer.parseInt(id);
        repository.deleteById(postId);
        return "post removed !! " + postId;
    }

    public Post updatePost(Post post) {
        Post existingPost = repository.findById(post.getPostId()).orElse(null);
        return repository.save(existingPost);
    }
}